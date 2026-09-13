import { execFileSync } from "node:child_process";
import { constants } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, unlink, rmdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { parseArgs } from "node:util";

const presets = {
  portrait: [1080, 1440],
  feed: [1080, 1350],
  square: [1080, 1080],
  story: [1080, 1920],
  landscape: [1920, 1080],
};

const photoPositions = [
  "center",
  "north",
  "northeast",
  "east",
  "southeast",
  "south",
  "southwest",
  "west",
  "northwest",
];

function options() {
  const strings = ["source", "art", "out", "layout", "preset", "size", "background"];
  const schema = Object.fromEntries(strings.map((key) => [key, { type: "string" }]));
  const { values } = parseArgs({
    options: {
      ...schema,
      "photo-fit": { type: "string", default: "cover" },
      "photo-gravity": { type: "string", default: "center" },
      plan: { type: "boolean" },
      help: { type: "boolean" },
    },
  });
  if (!["contain", "cover"].includes(values["photo-fit"])) {
    throw new Error(
      "--photo-fit must be cover (fill and crop) or contain (whole photo with padding).",
    );
  }
  if (!photoPositions.includes(values["photo-gravity"])) {
    throw new Error(`--photo-gravity must be one of: ${photoPositions.join(", ")}.`);
  }
  return values;
}

function geometry(args) {
  const layout = args.layout ?? "design-only";
  if (!["design-only", "top-bottom", "left-right"].includes(layout)) {
    throw new Error("Layout must be design-only, top-bottom, or left-right.");
  }
  if (args.size && args.preset) throw new Error("Choose --size or --preset, not both.");
  const size = args.size?.match(/^(\d+)[x×](\d+)$/);
  if (args.size && !size) throw new Error("Size must look like 1080x1440.");
  const dimensions = size ? size.slice(1).map(Number) : presets[args.preset ?? "portrait"];
  if (!dimensions) throw new Error(`Unknown preset. Choose: ${Object.keys(presets).join(", ")}`);
  const [width, height] = dimensions;
  if (!dimensions.every((n) => Number.isSafeInteger(n) && n > 0 && n <= 16384)) {
    throw new Error("Each canvas edge must be between 1 and 16384 pixels.");
  }
  const panel = [
    layout === "left-right" ? width / 2 : width,
    layout === "top-bottom" ? height / 2 : height,
  ];
  if (!panel.every(Number.isInteger)) throw new Error("The split axis must be even for 50:50.");
  return { layout, canvas: dimensions, panel };
}

function magick(args) {
  try {
    return execFileSync("magick", args, { encoding: "utf8", maxBuffer: 1024 * 1024 }).trim();
  } catch (error) {
    if (error.code === "ENOENT") throw new Error("Install ImageMagick 7 to export exact images.");
    throw new Error(`Image export failed: ${error.stderr || error.message}`);
  }
}

async function readImage(filename, destination) {
  if (!filename) throw new Error("Provide the required --source and/or --art file.");
  // Read literal paths ourselves: image CLI syntax must not reinterpret a user's filename.
  await copyFile(path.resolve(filename), destination);
  const dimensions = magick([destination, "-auto-orient", "-format", "%w %h", "info:"]);
  if (!/^\d+ \d+$/.test(dimensions)) throw new Error("Expected a single still image.");
  const [width, height] = dimensions.split(" ").map(Number);
  if (!Number.isFinite(width * height)) throw new Error("Expected a single still image.");
  return [width, height];
}

async function render(args, plan, directory) {
  const art = path.join(directory, "art");
  const source = path.join(directory, "source");
  const [width, height] = await readImage(args.art, art);
  const [pw, ph] = plan.panel;
  const scale = Math.min(pw / width, ph / height);
  if (Math.max(pw - width * scale, ph - height * scale) > 2) {
    throw new Error(`Generate artwork at panel aspect ${pw}:${ph}; received ${width}x${height}.`);
  }
  const target = `${pw}x${ph}`;
  const artwork = [art, "-auto-orient", "-resize", `${target}!`];
  let command = artwork;
  if (plan.layout !== "design-only") {
    await readImage(args.source, source);
    const resize = args["photo-fit"] === "cover" ? `${target}^` : target;
    const photo = [
      source,
      "-auto-orient",
      "-resize",
      resize,
      "-background",
      args.background,
      "-gravity",
      args["photo-gravity"],
      "-extent",
      target,
    ];
    command = [
      "(",
      ...photo,
      ")",
      "(",
      ...artwork,
      ")",
      plan.layout === "top-bottom" ? "-append" : "+append",
    ];
  }
  const result = path.join(directory, "result.png");
  magick([...command, "-colorspace", "sRGB", "-strip", result]);
  const actual = magick(["identify", "-format", "%wx%h", result]);
  if (actual !== plan.canvas.join("x")) throw new Error(`Unexpected export size: ${actual}`);
  await mkdir(path.dirname(path.resolve(args.out)), { recursive: true });
  await copyFile(result, path.resolve(args.out), constants.COPYFILE_EXCL);
  console.log(`${path.resolve(args.out)} (${actual}, ${plan.layout})`);
}

async function main() {
  const args = options();
  if (args.help) {
    console.log(await readFile(path.join(import.meta.dirname, "compose-help.txt"), "utf8"));
    return;
  }
  const plan = geometry(args);
  if (args.plan) {
    console.log(JSON.stringify(plan, null, 2));
    return;
  }
  if (!args.out?.endsWith(".png")) throw new Error("Choose a new --out filename ending in .png.");
  args.background ??= "#f6f3ed";
  if (!/^#[0-9a-f]{6}$/i.test(args.background)) {
    throw new Error("--background must be a six-digit hex color, for example #f6f3ed.");
  }
  const directory = await mkdtemp(path.join(os.tmpdir(), "albert-imagebook-"));
  try {
    await render(args, plan, directory);
  } finally {
    for (const name of ["source", "art", "result.png"]) {
      await unlink(path.join(directory, name)).catch((error) => {
        if (error.code !== "ENOENT") throw error;
      });
    }
    await rmdir(directory);
  }
}

main().catch((error) => {
  console.error(error.code === "EEXIST" ? "Output exists; choose a new filename." : error.message);
  process.exitCode = 1;
});
