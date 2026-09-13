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
  assert(styles.length > 0, "No style prompts found");
  for (const filename of styles) {
    const text = await readFile(filename, "utf8");
    const bodies = text.split(/^## Prompt\s*$/m);
    assert(bodies.length === 2 && bodies[1].trim(), `Missing prompt body: ${filename}`);
    assert(/^# .+\n/.test(text), `Missing style title: ${filename}`);
  }
  await Promise.all(files.map(verifyLinks));
  console.log(`One installable Skill, ${styles.length} style prompts; local links resolve.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
