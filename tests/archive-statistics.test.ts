import { describe, expect, it } from 'vitest';
import { getArchiveStats, getPaperStats } from '../src/domain/archive-statistics';
import { getMethodStats } from '../src/domain/statistics';
import { examScopeSchema, type Paper, type Question } from '../src/domain/schema';

const scope = { exam: '301', startYear: 2020, endYear: 2022 };
const paper = (year: number): Paper => ({ id: `paper-${year}`, libraryId: 'test', year,
  exam: '301', title: '测试卷', status: 'complete', expectedQuestionCount: 2,
  source: { url: 'https://example.org/paper' },
});
const question = (year: number, number: number, verified = true): Question => ({
  id: `q-${year}-${number}`, libraryId: 'test', paperId: `paper-${year}`, number: String(number),
  summary: '测试', source: { url: 'https://example.org/paper' },
  methodLinks: [{ methodId: 'method', verification: verified ? 'verified' : 'pending', note: '核验依据' }],
});

describe('archive coverage', () => {
  it('does not count a pending-only question or duplicate tags twice', () => {
    const first = question(2020, 1);
    first.methodLinks.push({ methodId: 'another-method', verification: 'verified', note: '另一路径' });
    const stats = getPaperStats(paper(2020), [first, question(2020, 2, false), { ...first, id: 'duplicate-record' }]);
    expect(stats).toMatchObject({ indexed: 2, questionsWithVerifiedLinks: 1, verifiedLinks: 2,
      pendingLinks: 1, complete: true });
  });
  it('requires continuous question numbers and respects library isolation', () => {
    const first = question(2020, 1);
    const foreign = { ...question(2020, 2), libraryId: 'other' };
    expect(getPaperStats(paper(2020), [first, foreign, question(2020, 3)]))
      .toMatchObject({ indexed: 2, complete: false });
  });
  it('keeps missing and incomplete years in the declared target denominator', () => {
    const entries = [question(2020, 1), question(2020, 2), question(2022, 1),
      question(2023, 1), question(2023, 2)];
    const stats = getArchiveStats([paper(2020), paper(2022), paper(2023)], entries, scope);
    expect(stats).toMatchObject({ paperCount: 3, indexedQuestionCount: 5, startYear: 2020, endYear: 2023,
      target: { expectedPapers: 3, completePapers: 1, incompleteYears: [2021, 2022] } });
  });
  it('never lets a different exam fill a missing target year', () => {
    const anotherExam = { ...paper(2021), exam: '302' };
    const stats = getArchiveStats([anotherExam], [question(2021, 1), question(2021, 2)], scope);
    expect(stats.target?.completePapers).toBe(0);
    expect(stats.target?.incompleteYears).toEqual([2020, 2021, 2022]);
  });
  it('distinguishes empty data from an undeclared target', () => {
    expect(getArchiveStats([], [], scope)).toMatchObject({ paperCount: 0, indexedQuestionCount: 0,
      startYear: undefined, endYear: undefined, target: { expectedPapers: 3, completePapers: 0 } });
    expect(getArchiveStats([], []).target).toBeUndefined();
    expect(examScopeSchema.safeParse({ ...scope, startYear: 2024 }).success).toBe(false);
  });
  it('counts verified supporting methods but excludes pending primary methods', () => {
    const pending = question(2020, 1, false);
    pending.methodLinks[0].role = 'primary';
    const verified = question(2020, 2);
    verified.methodLinks[0].role = 'supporting';
    expect(getMethodStats('method', [pending, verified]).questionCount).toBe(1);
    expect(getPaperStats(paper(2020), [pending, verified])).toMatchObject({ questionsWithVerifiedLinks: 1,
      roleCounts: { primary: 1, supporting: 1, unclassified: 0 } });
  });
});
