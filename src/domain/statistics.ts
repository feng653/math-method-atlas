import type { Question } from './schema';

// Caller supplies questions from the active library; IDs are library-scoped.
export function getMethodStats(methodId: string, questions: Question[]) {
  const matched = questions.filter((question) => question.methodLinks.some(
    (link) => link.methodId === methodId && link.verification === 'verified',
  ));
  const unique = [...new Map(matched.map((question) =>
    [`${question.libraryId}/${question.paperId}/${Number(question.number)}`, question])).values()];
  return {
    questionCount: unique.length,
    paperCount: new Set(unique.map((question) => `${question.libraryId}/${question.paperId}`)).size,
    questions: unique,
  };
}
