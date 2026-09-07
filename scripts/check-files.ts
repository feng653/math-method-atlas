import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const excluded = new Set(['node_modules', 'dist', '.cache', '.git', 'coverage', 'test-results', 'playwright-report']);
const extensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.scss', '.html', '.ps1', '.py']);
const failures: string[] = [];
let checked = 0;
async function walk(directory: string): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!excluded.has(entry.name)) await walk(path);
    } else if (entry.isFile() && extensions.has(extname(entry.name))) {
      const content = await readFile(path, 'utf8');
      const lines = content.length ? content.replace(/\r\n/g, '\n').replace(/\n$/, '').split('\n').length : 0;
      checked++;
      if (lines > 250) failures.push(`${relative(root, path)}: ${lines} lines (maximum 250)`);
    }
  }
}
await walk(root);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`File size gate passed: ${checked} code files, each at most 250 lines.`);
