import type { AtlasData, Library, Paper, ProblemType, Question } from './schema';
import type { ThinkingSample } from './thinking-schema';

export function validateThinking(data: AtlasData) {
  const errors: string[] = [], seen = new Set<string>();
  for (const sample of data.thinkingSamples) {
    const label = `${sample.libraryId}/${sample.id}`;
    if (sample.id !== sample.questionId) errors.push(`${label}: sample ID must equal question ID`);
    if (seen.has(label)) errors.push(`${label}: duplicate thinking sample`);
    seen.add(label);
    const question = data.questions.find((item) => item.libraryId === sample.libraryId && item.id === sample.questionId);
    if (!question) errors.push(`${label}: unknown sample question`);
    for (const id of sample.triggerIds) if (!data.problemTypes.some((group) => group.libraryId === sample.libraryId
      && group.id === id && group.kind === 'trigger')) errors.push(`${label}: unknown trigger ${id}`);
    for (const id of sample.methodIds) if (!question?.methodLinks.some((link) => link.methodId === id && link.verification === 'verified')) {
      errors.push(`${label}: sample method must have verified question evidence ${id}`);
    }
    for (const id of sample.chapterIds) if (!data.methods.some((method) => method.libraryId === sample.libraryId
      && method.chapterId === id && sample.methodIds.includes(method.id))) errors.push(`${label}: chapter lacks supporting sample method ${id}`);
  }
  for (const group of data.problemTypes) if (group.kind === 'trigger' && !group.category) errors.push(`${group.id}: trigger needs thinking category`);
  return errors;
}

export function thinkingCoverage(library: Library, samples: ThinkingSample[], papers: Paper[], groups: ProblemType[], records: Question[]) {
  const scoped = samples.filter((sample) => sample.libraryId === library.id && sample.status === 'reviewed');
  const questions = new Set(scoped.map((sample) => sample.questionId));
  const paperIds = new Set(records.filter((question) => question.libraryId === library.id && questions.has(question.id)).map((question) => question.paperId));
  const years = [...new Set(papers.filter((paper) => paper.libraryId === library.id && paperIds.has(paper.id)).map((paper) => paper.year))].sort();
  const chapters = library.chapters.filter((chapter) => !chapter.supplementary).map((chapter) => ({
    id: chapter.id, title: chapter.title, subject: chapter.subject,
    count: new Set(scoped.filter((sample) => sample.chapterIds.includes(chapter.id)).map((sample) => sample.questionId)).size,
  }));
  return { sampleCount: questions.size, chapters, years,
    coveredChapters: chapters.filter((chapter) => chapter.count >= 2).length,
    paperScope: papers.filter((paper) => paper.libraryId === library.id).length,
    triggers: groups.filter((group) => group.libraryId === library.id && group.kind === 'trigger').length,
    unsupportedTriggers: groups.filter((group) => group.libraryId === library.id && group.kind === 'trigger'
      && !scoped.some((sample) => sample.triggerIds.includes(group.id))).map((group) => group.id),
  };
}
