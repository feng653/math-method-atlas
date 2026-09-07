import type { Library, Paper, Question } from './schema';
import { questionKey } from './statistics';

export function getPaperStats(paper: Paper, questions: Question[]) {
  const entries = questions.filter((question) => question.libraryId === paper.libraryId && question.paperId === paper.id);
  const keys = new Set(entries.map(questionKey));
  const verifiedKeys = new Set(entries.filter((question) => question.methodLinks.some((link) =>
    link.verification === 'verified')).map(questionKey));
  const verifiedLinks = new Set(entries.flatMap((question) => question.methodLinks.filter((link) =>
    link.verification === 'verified').map((link) => `${questionKey(question)}/${link.methodId}`)));
  const pendingLinks = new Set(entries.flatMap((question) => question.methodLinks.filter((link) =>
    link.verification === 'pending').map((link) => `${questionKey(question)}/${link.methodId}`)));
  for (const link of verifiedLinks) pendingLinks.delete(link);
  const numbers = new Set(entries.map((question) => Number(question.number)));
  const expected = paper.expectedQuestionCount;
  const complete = paper.status === 'complete' && expected !== undefined && numbers.size === expected
    && Array.from({ length: expected }, (_, index) => index + 1).every((number) => numbers.has(number));
  return { paperId: paper.id, year: paper.year, expected, indexed: keys.size,
    questionsWithVerifiedLinks: verifiedKeys.size, verifiedLinks: verifiedLinks.size,
    pendingLinks: pendingLinks.size, complete,
    unmappedQuestions: [...new Map(entries.filter((question) => !question.methodLinks.length)
      .map((question) => [questionKey(question), question.id])).values()],
  };
}

// Inputs belong to one library, matching App's active-library boundary.
export function getArchiveStats(papers: Paper[], questions: Question[], scope?: Library['examScope']) {
  const unique = [...new Map(papers.map((paper) => [`${paper.libraryId}/${paper.id}`, paper])).values()];
  const perPaper = unique.map((paper) => getPaperStats(paper, questions));
  const years = [...new Set(unique.map((paper) => paper.year))].sort((a, b) => a - b);
  const targetYears = scope ? Array.from({ length: scope.endYear - scope.startYear + 1 }, (_, index) => scope.startYear + index) : [];
  const completeYears = new Set(unique.filter((paper, index) => perPaper[index].complete
    && (!scope || paper.exam === scope.exam)).map((paper) => paper.year));
  return { paperCount: unique.length, indexedQuestionCount: perPaper.reduce((sum, paper) => sum + paper.indexed, 0),
    verifiedQuestionCount: perPaper.reduce((sum, paper) => sum + paper.questionsWithVerifiedLinks, 0),
    completePaperCount: perPaper.filter((paper) => paper.complete).length,
    startYear: years[0], endYear: years.at(-1), perPaper,
    target: scope ? { ...scope, expectedPapers: targetYears.length,
      completePapers: targetYears.filter((year) => completeYears.has(year)).length,
      incompleteYears: targetYears.filter((year) => !completeYears.has(year)),
    } : undefined,
  };
}
