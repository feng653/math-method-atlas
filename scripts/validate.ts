import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { atlasSchema } from '../src/domain/schema';
import { validateAtlas } from '../src/domain/validate';
import { validateRequirements } from '../src/domain/requirements';
import { validateArticles } from './validate-articles';

const root = fileURLToPath(new URL('../content/libraries/', import.meta.url));
const records: Record<string, unknown[]> = { libraries: [], methods: [], papers: [], questions: [], problemTypes: [], thinkingSamples: [] };
const errors: string[] = [];
async function readJson(path: string, target: string, expectedId: string, expectedLibrary?: string) {
  try {
    const record = JSON.parse(await readFile(path, 'utf8'));
    records[target].push(record);
    if (record.id !== expectedId) errors.push(`${path}: filename/directory must match id ${expectedId}`);
    if (expectedLibrary && record.libraryId !== expectedLibrary) errors.push(`${path}: wrong library directory`);
  }
  catch (error) { errors.push(`${path}: ${String(error)}`); }
}

for (const directory of await readdir(root, { withFileTypes: true })) {
  if (!directory.isDirectory()) continue;
  const base = join(root, directory.name);
  await readJson(join(base, 'library.json'), 'libraries', directory.name);
  for (const kind of ['methods', 'papers', 'questions', 'problem-types', 'thinking-samples']) {
    let files: string[] = [];
    try { files = await readdir(join(base, kind)); }
    catch (error) { if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error; }
    for (const file of files.filter((name) => name.endsWith('.json'))) {
      const target = kind === 'problem-types' ? 'problemTypes' : kind === 'thinking-samples' ? 'thinkingSamples' : kind;
      await readJson(join(base, kind, file), target, file.slice(0, -5), directory.name);
    }
  }
}
errors.push(...validateAtlas(records));
const parsed = atlasSchema.safeParse(records);
if (parsed.success) {
  const requirementRoot = fileURLToPath(new URL('../content/requirements/', import.meta.url));
  const documents: unknown[] = [];
  for (const file of (await readdir(requirementRoot)).filter((name) => name.endsWith('.json'))) {
    try { documents.push(JSON.parse(await readFile(join(requirementRoot, file), 'utf8'))); }
    catch (error) { errors.push(`${file}: ${String(error)}`); }
  }
  for (const document of documents) errors.push(...validateRequirements(document, parsed.data, documents));
  for (const library of parsed.data.libraries) for (const chapter of library.chapters) {
    for (const concept of chapter.concepts ?? []) for (const value of concept.formulas ?? []) {
      try { katex.renderToString(value, { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 }); }
      catch (error) { errors.push(`${library.id}/${chapter.id}/${concept.title}: ${String(error)}`); }
    }
  }
  for (const method of parsed.data.methods) {
    const formulas = [method.formula, ...(method.example.formulas ?? []),
      ...(typeof method.example.solution === 'string' ? [] : method.example.solution.flatMap((step) => step.formulas))];
    for (const value of formulas) try {
      katex.renderToString(value, { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 });
    } catch (error) { errors.push(`${method.libraryId}/${method.id} formula: ${String(error)}`); }
  }
  for (const type of parsed.data.problemTypes) for (const formula of type.formulas) {
    try { katex.renderToString(formula.latex, { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 }); }
    catch (error) { errors.push(`${type.libraryId}/${type.id}/${formula.id}: ${String(error)}`); }
  }
  for (const question of parsed.data.questions) {
    for (const value of [...(question.statement?.formulas ?? []), ...(question.statement?.options ?? [])]) {
      try { katex.renderToString(value, { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 }); }
      catch (error) { errors.push(`${question.id} statement: ${String(error)}`); }
    }
  }
}
errors.push(...await validateArticles(fileURLToPath(new URL('../docs/textbook/', import.meta.url))));
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Content valid: ${records.libraries.length} libraries, ${records.methods.length} methods, ${records.problemTypes.length} groups, ${records.thinkingSamples.length} thinking samples, ${records.papers.length} papers, ${records.questions.length} questions.`);
}
