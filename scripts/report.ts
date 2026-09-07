import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { librarySchema, methodSchema, paperSchema, questionSchema } from '../src/domain/schema';
import { getCoverage } from '../src/domain/coverage';
import { requirementItemsSchema } from '../src/domain/requirement-items';

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
  result.push({ library: library.id, version: library.syllabus.version,
    targetSyllabusVerified: library.syllabus.reviewStatus === 'reviewed',
    methods: methods.length, reviewedMethods: methods.filter((m) => m.status === 'reviewed').length,
    topicCoverage: getCoverage(library, methods),
    historicalRequirements: requirementDocuments.filter((document) => document.libraryId === library.id).map((document) => ({
      evidenceVersion: document.evidenceVersion, targetVersion: document.targetVersion,
      status: document.status, numberedItems: document.items.length,
      withCandidates: document.items.filter((item) => item.candidateMethodIds.length > 0).length,
      withoutCandidates: document.items.filter((item) => !item.candidateMethodIds.length).map((item) => item.id),
      note: '候选入口数量不代表已核验覆盖率，也不认证目标版大纲。',
    })),
    papers: papers.sort((a, b) => a.year - b.year).map((paper) => {
      const entries = questions.filter((q) => q.paperId === paper.id);
      return { year: paper.year, expected: paper.expectedQuestionCount, indexed: entries.length,
        questionsWithVerifiedLinks: entries.filter((q) => q.methodLinks.some((l) => l.verification === 'verified')).length,
        pendingLinks: entries.flatMap((q) => q.methodLinks).filter((l) => l.verification === 'pending').length,
        unmappedQuestions: entries.filter((q) => !q.methodLinks.length).map((q) => q.id) };
    }),
  });
}
console.log(JSON.stringify(result, null, 2));
