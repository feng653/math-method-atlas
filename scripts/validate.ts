import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { atlasSchema } from '../src/domain/schema';
import { validateAtlas } from '../src/domain/validate';
import { validateRequirements } from '../src/domain/requirements';

const root = fileURLToPath(new URL('../content/libraries/', import.meta.url));
const records: Record<string, unknown[]> = { libraries: [], methods: [], papers: [], questions: [] };
const errors: string[] = [];
async function readJson(path: string, target: string) {
  try { records[target].push(JSON.parse(await readFile(path, 'utf8'))); }
  catch (error) { errors.push(`${path}: ${String(error)}`); }
}

for (const directory of await readdir(root, { withFileTypes: true })) {
  if (!directory.isDirectory()) continue;
  const base = join(root, directory.name);
  await readJson(join(base, 'library.json'), 'libraries');
  for (const kind of ['methods', 'papers', 'questions']) {
    let files: string[] = [];
    try { files = await readdir(join(base, kind)); }
    catch (error) { if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error; }
    for (const file of files.filter((name) => name.endsWith('.json'))) await readJson(join(base, kind, file), kind);
  }
}
errors.push(...validateAtlas(records));
const parsed = atlasSchema.safeParse(records);
if (parsed.success) {
  const requirementRoot = fileURLToPath(new URL('../content/requirements/', import.meta.url));
  for (const file of (await readdir(requirementRoot)).filter((name) => name.endsWith('.json'))) {
    try { errors.push(...validateRequirements(JSON.parse(await readFile(join(requirementRoot, file), 'utf8')), parsed.data)); }
    catch (error) { errors.push(`${file}: ${String(error)}`); }
  }
  for (const method of parsed.data.methods) {
    try {
      katex.renderToString(method.formula, { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 });
    } catch (error) { errors.push(`${method.libraryId}/${method.id} formula: ${String(error)}`); }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Content valid: ${records.libraries.length} libraries, ${records.methods.length} methods, ${records.papers.length} papers, ${records.questions.length} questions.`);
}
