import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { librarySchema, methodSchema, paperSchema, questionSchema, problemTypeSchema } from '../src/domain/schema';
import { getCoverage } from '../src/domain/coverage';
import { requirementItemsSchema } from '../src/domain/requirement-items';
import { getArchiveStats } from '../src/domain/archive-statistics';

const read = async (path: string) => JSON.parse(await readFile(path, 'utf8'));
async function files(directory: string) {
  try { return Promise.all((await readdir(directory)).filter((name) => name.endsWith('.json')).map((name) => read(join(directory, name)))); }
  catch (error) { if ((error as NodeJS.ErrnoException).code === 'ENOENT') return []; throw error; }
}
const result = [];
const requirementDocuments = (await files('content/requirements'))
  .map((item) => requirementItemsSchema.safeParse(item)).filter((item) => item.success).map((item) => item.data!);
for (const dir of await readdir('content/libraries')) {
  const base = join('content/libraries', dir);
  const library = librarySchema.parse(await read(join(base, 'library.json')));
  const methods = (await files(join(base, 'methods'))).map((item) => methodSchema.parse(item));
  const papers = (await files(join(base, 'papers'))).map((item) => paperSchema.parse(item));
  const questions = (await files(join(base, 'questions'))).map((item) => questionSchema.parse(item));
  const groups = (await files(join(base, 'problem-types'))).map((item) => problemTypeSchema.parse(item));
  const types = groups.filter((item) => item.kind !== 'trigger');
  const classified = new Set(types.flatMap((type) => type.methods.map((choice) => choice.methodId)));
  const archive = getArchiveStats(papers, questions, library.examScope);
  result.push({ library: library.id, version: library.syllabus.version,
    targetSyllabusVerified: library.syllabus.reviewStatus === 'reviewed',
    methods: methods.length, reviewedMethods: methods.filter((m) => m.status === 'reviewed').length,
    triggerConditions: groups.filter((item) => item.kind === 'trigger').length,
    problemTypes: { count: types.length, reviewed: types.filter((type) => type.status === 'reviewed').length,
      formulas: types.reduce((count, type) => count + type.formulas.length, 0),
      chaptersWithoutTypes: library.chapters.filter((chapter) => !chapter.supplementary && !types.some((type) => type.chapterId === chapter.id)).map((chapter) => chapter.id),
      methodsWithoutTypes: methods.filter((method) => !library.chapters.find((chapter) => chapter.id === method.chapterId)?.supplementary && !classified.has(method.id)).map((method) => method.id),
      note: '已有方法进入题型不代表候选方法穷尽；草案真题归属不计为题型考试频次。' },
    topicCoverage: getCoverage(library, methods),
    archiveCoverage: { ...archive, perPaper: undefined },
    historicalRequirements: requirementDocuments.filter((document) => document.libraryId === library.id).map((document) => ({
      evidenceVersion: document.evidenceVersion, targetVersion: document.targetVersion,
      status: document.status, numberedItems: document.items.length,
      withCandidates: document.items.filter((item) => item.candidateMethodIds.length > 0).length,
      withoutCandidates: document.items.filter((item) => !item.candidateMethodIds.length).map((item) => item.id),
      note: '候选入口数量不代表已核验覆盖率，也不认证目标版大纲。',
    })),
    papers: [...archive.perPaper].sort((a, b) => a.year - b.year),
  });
}
console.log(JSON.stringify(result, null, 2));
