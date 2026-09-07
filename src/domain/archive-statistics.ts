import type { Library, Paper, Question } from './schema';
import { questionKey } from './statistics';

export function getPaperStats(paper: Paper, questions: Question[]) {
  const entries = questions.filter((question) => question.libraryId === paper.libraryId && question.paperId === paper.id);
  const keys = new Set(entries.map(questionKey));
  const verifiedKeys = new Set(entries.filter((question) => question.methodLinks.some((link) =>
    link.verification === 'verified')).map(questionKey));
  const primaryKeys = new Set(entries.filter((question) => question.methodLinks.some((link) =>
    link.verification === 'verified' && link.role === 'primary')).map(questionKey));
  const verifiedLinks = new Set(entries.flatMap((question) => question.methodLinks.filter((link) =>
    link.verification === 'verified').map((link) => `${questionKey(question)}/${link.methodId}`)));
  const pendingLinks = new Set(entries.flatMap((question) => question.methodLinks.filter((link) =>
    link.verification === 'pending').map((link) => `${questionKey(question)}/${link.methodId}`)));
  for (const link of verifiedLinks) pendingLinks.delete(link);
  const allLinks = [...new Map(entries.flatMap((question) => question.methodLinks.map((link) =>
    [`${questionKey(question)}/${link.methodId}`, link] as const))).values()];
  const roleCounts = { primary: 0, supporting: 0, unclassified: 0 };
  for (const link of allLinks) roleCounts[link.role ?? 'unclassified']++;
  const numbers = new Set(entries.map((question) => Number(question.number)));
  const expected = paper.expectedQuestionCount;
  const complete = paper.status === 'complete' && expected !== undefined && numbers.size === expected
    && Array.from({ length: expected }, (_, index) => index + 1).every((number) => numbers.has(number));
  const uniqueQuestions = [...new Map(entries.map((question) => [questionKey(question), question])).values()];
  const unaudited = uniqueQuestions.filter((question) => !question.subquestionAudit
    || question.subquestionAudit.expectedCount !== (question.subquestions?.length ?? 0));
  const subquestions = {
    recorded: uniqueQuestions.reduce((sum, question) => sum + (question.subquestions?.length ?? 0), 0),
    auditedQuestions: uniqueQuestions.length - unaudited.length,
    unauditedQuestionIds: unaudited.map((question) => question.id),
    unmappedParts: uniqueQuestions.flatMap((question) => (question.subquestions ?? [])
      .filter((part) => !part.methodIds.length).map((part) => `${question.id}/${part.id}`)),
    partsWithoutVerifiedMethods: uniqueQuestions.flatMap((question) => (question.subquestions ?? [])
      .filter((part) => !part.methodIds.some((id) => question.methodLinks.some((link) =>
        link.methodId === id && link.verification === 'verified'))).map((part) => `${question.id}/${part.id}`)),
    complete: complete && unaudited.length === 0,
  };
  return { paperId: paper.id, year: paper.year, expected, indexed: keys.size,
    questionsWithVerifiedLinks: verifiedKeys.size, verifiedLinks: verifiedLinks.size,
    pendingLinks: pendingLinks.size, roleCounts, complete, subquestions,
    questionsWithoutVerifiedPrimary: [...new Map(entries.filter((question) => !primaryKeys.has(questionKey(question)))
      .map((question) => [questionKey(question), question.id])).values()],
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
    subquestions: {
      recorded: perPaper.reduce((sum, paper) => sum + paper.subquestions.recorded, 0),
      auditedQuestions: perPaper.reduce((sum, paper) => sum + paper.subquestions.auditedQuestions, 0),
      completePapers: perPaper.filter((paper) => paper.subquestions.complete).length,
    },
    startYear: years[0], endYear: years.at(-1), perPaper,
    target: scope ? { ...scope, expectedPapers: targetYears.length,
      completePapers: targetYears.filter((year) => completeYears.has(year)).length,
      incompleteYears: targetYears.filter((year) => !completeYears.has(year)),
    } : undefined,
  };
}
