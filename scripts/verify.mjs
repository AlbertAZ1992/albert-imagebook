import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const ignored = new Set([
  ".git",
  ".local",
  ".local-recipes",
  ".local_scripts",
  "node_modules",
  "output",
  "outputs",
  "prompt-inbox",
  "local-scripts",
]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory() && !ignored.has(entry.name)) {
      files.push(...(await markdownFiles(filename)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(filename);
    }
  }
  return files;
}

async function verifyLinks(filename) {
  const text = await readFile(filename, "utf8");
  assert(text.endsWith("\n"), `${filename} needs a final newline`);
  const prose = text.replace(/```[\s\S]*?```/g, "");
  const targets = [
    ...prose.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g),
    ...prose.matchAll(/(?:src|href)="([^"]+)"/g),
  ];
  for (const match of targets) {
    const target = match[1];
    if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(target)) continue;
    const resolved = path.resolve(path.dirname(filename), decodeURIComponent(target.split("#")[0]));
    assert(resolved.startsWith(`${root}${path.sep}`), `Link outside package: ${target}`);
    await access(resolved).catch(() => {
      throw new Error(`Broken link in ${path.relative(root, filename)}: ${target}`);
    });
  }
}

async function main() {
  const files = await markdownFiles(root);
  const entrypoints = files.filter((file) => path.basename(file) === "SKILL.md");
  assert(
    entrypoints.length === 1 && entrypoints[0] === path.join(root, "SKILL.md"),
    "The package must contain one root SKILL.md",
  );
  const skill = await readFile(entrypoints[0], "utf8");
  assert(skill.startsWith("---\nname: albert-imagebook\n"), "Invalid Skill name/frontmatter");
  const styles = files.filter((file) =>
    path.relative(root, file).match(/^styles\/[^/]+\/prompt\.md$/),
  );
  assert(styles.length === 24, `Expected 24 style prompts; found ${styles.length}`);
  for (const filename of styles) {
    const text = await readFile(filename, "utf8");
    const bodies = text.split(/^## Prompt\s*$/m);
    assert(bodies.length === 2 && bodies[1].trim(), `Missing prompt body: ${filename}`);
    assert(/^# .+\n/.test(text), `Missing style title: ${filename}`);
  }
  const guides = await Promise.all([
    readFile(path.join(root, "README.md"), "utf8"),
    readFile(path.join(root, "README.zh-CN.md"), "utf8"),
  ]);
  for (const filename of styles) {
    const styleId = path.basename(path.dirname(filename));
    for (const guide of guides) {
      assert(guide.includes(styleId), `README gallery is missing style: ${styleId}`);
    }
  }
  const llms = await readFile(path.join(root, "llms.txt"), "utf8");
  assert(llms.endsWith("\n"), "llms.txt needs a final newline");
  assert(llms.includes("24 photo-to-art styles"), "llms.txt needs the library size");
  assert(llms.includes("AlbertAZ1992/albert-imagebook"), "llms.txt needs the public repository");
  const packageData = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
  assert(packageData.description.includes("24"), "Package description needs the library size");
  assert(packageData.keywords.includes("photo-to-art"), "Package keywords need photo-to-art");
  await Promise.all(files.map(verifyLinks));
  console.log(`Verified one Skill, ${styles.length} styles, and agent-readable SEO metadata.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
