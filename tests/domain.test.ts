import { describe, expect, it } from 'vitest';
import type { AtlasData, StructuredMethod } from '../src/domain/schema';
import { validateAtlas } from '../src/domain/validate';
import { getMethodStats } from '../src/domain/statistics';
import { getPaperStats } from '../src/domain/archive-statistics';

function fixture(): Omit<AtlasData, 'methods'> & { methods: StructuredMethod[] } {
  return {
    problemTypes: [], thinkingSamples: [],
    libraries: [{ schemaVersion: 1, id: 'test', title: '测试', description: '测试体系',
      syllabus: { version: '2026', sourceUrl: 'https://example.org/syllabus', reviewStatus: 'draft' },
      chapters: [{ id: 'limits', title: '极限', subject: '高数', syllabusTopics: [{ id: 'limit', title: '求极限' }] }],
    }],
    methods: [{ id: 'equivalent', libraryId: 'test', chapterId: 'limits', title: '等价无穷小',
      summary: '乘除中替换', conditions: ['函数趋于零且比值趋于一'], steps: ['检查条件', '替换并求值'],
      formula: '\\sin x \\sim x', pitfalls: ['不能任意替换和差项'],
      example: { prompt: '自编：sin x / x 的极限', solution: 'x 趋零时极限为 1' },
      relatedIds: [], topicIds: ['limit'], status: 'draft',
    }],
    papers: [{ id: 'paper-2026', libraryId: 'test', year: 2026, exam: 'math-one', title: '测试卷',
      source: { url: 'https://example.org/paper' }, status: 'complete', expectedQuestionCount: 1 }],
    questions: [{ id: 'question-1', libraryId: 'test', paperId: 'paper-2026', number: '1', summary: '测试索引',
      source: { url: 'https://example.org/paper', page: 1 },
      methodLinks: [{ methodId: 'equivalent', verification: 'verified', note: '来源第 1 页，按题意核验' }],
    }],
  };
}

describe('content integrity', () => {
  it('accepts a structurally complete collection', () => expect(validateAtlas(fixture())).toEqual([]));

  it('requires a same-library verified association for an exam teaching example', () => {
    const data = fixture();
    data.methods[0].example.questionId = 'question-1';
    expect(validateAtlas(data)).toEqual([]);
    data.questions[0].methodLinks[0].verification = 'pending';
    expect(validateAtlas(data).join(' ')).toContain('example question needs verified method link');
    data.questions[0].libraryId = 'other';
    expect(validateAtlas(data).join(' ')).toContain('unknown example question');
    data.methods[0].example.questionId = 'missing';
    expect(validateAtlas(data).join(' ')).toContain('unknown example question');
  });

  it('rejects duplicate entity ids', () => {
    const data = fixture();
    data.methods.push(structuredClone(data.methods[0]));
    expect(validateAtlas(data).join(' ')).toContain('duplicate');
  });

  it('rejects topic references outside the selected chapter', () => {
    const data = fixture();
    data.methods[0].topicIds = ['other-topic'];
    expect(validateAtlas(data).join(' ')).toContain('does not belong');
  });

  it('rejects missing method links and related references', () => {
    const data = fixture();
    data.methods[0].relatedIds = ['missing'];
    data.questions[0].methodLinks[0].methodId = 'missing';
    expect(validateAtlas(data).join(' ')).toContain('unknown method');
    expect(validateAtlas(data).join(' ')).toContain('invalid related method');
  });

  it('rejects verification with no written evidence', () => {
    const data = fixture();
    data.questions[0].methodLinks[0].note = ' ';
    expect(validateAtlas(data).join(' ')).toContain('evidence note');
  });

  it('allows pending links without claiming verification', () => {
    const data = fixture();
    data.questions[0].methodLinks[0] = { methodId: 'equivalent', verification: 'pending', note: '' };
    expect(validateAtlas(data)).toEqual([]);
  });
  it('requires evidence for role classification and keeps role separate from verification', () => {
    const data = fixture();
    const link = data.questions[0].methodLinks[0];
    link.role = 'primary';
    expect(validateAtlas(data).join(' ')).toContain('roleNote');
    link.roleNote = '直接求出所问极限';
    link.verification = 'pending';
    expect(validateAtlas(data)).toEqual([]);
  });

  it('rejects duplicate links to avoid inflated counts', () => {
    const data = fixture();
    data.questions[0].methodLinks.push({ ...data.questions[0].methodLinks[0] });
    expect(validateAtlas(data).join(' ')).toContain('method link: duplicate');
  });

  it('counts multiple subquestions once and retains the parent verification gate', () => {
    const data = fixture();
    const question = data.questions[0];
    question.subquestions = ['1', '2'].map((number) => ({
      id: `part-${number}`, label: `(${number})`, summary: '求极限',
      methodIds: ['equivalent'], evidenceNote: '题面明确编号',
    }));
    expect(validateAtlas(data)).toEqual([]);
    expect(getMethodStats('equivalent', data.questions)).toMatchObject({ questionCount: 1, paperCount: 1 });
    expect(getPaperStats(data.papers[0], data.questions).indexed).toBe(1);
    question.methodLinks[0].verification = 'pending';
    expect(getMethodStats('equivalent', data.questions).questionCount).toBe(0);
  });

  it('rejects duplicated subquestion identifiers and references absent from the parent', () => {
    const data = fixture();
    const part = { id: 'part-1', label: '(I)', summary: '求极限', methodIds: ['missing'], evidenceNote: '题面编号' };
    data.questions[0].subquestions = [part, { ...part }];
    const errors = validateAtlas(data).join(' ');
    expect(errors).toContain('subquestion id: duplicate');
    expect(errors).toContain('subquestion label: duplicate');
    expect(errors).toContain('subquestion method missing from parent');
  });

  it('requires audited part counts to match while preserving unaudited input', () => {
    const data = fixture();
    data.questions[0].subquestionAudit = { expectedCount: 0, checkedOn: '2026-09-08', note: '原题未列子问编号' };
    expect(validateAtlas(data)).toEqual([]);
    data.questions[0].subquestionAudit.expectedCount = 2;
    expect(validateAtlas(data).join(' ')).toContain('Audited subquestion count');
    delete data.questions[0].subquestionAudit;
    expect(validateAtlas(data)).toEqual([]);
  });

  it('rejects repeated question numbers even with different ids', () => {
    const data = fixture();
    data.papers[0].expectedQuestionCount = 2;
    data.questions.push({ ...structuredClone(data.questions[0]), id: 'question-2' });
    expect(validateAtlas(data).join(' ')).toContain('question number: duplicate');
  });

  it('rejects complete papers with missing questions or expected count', () => {
    const data = fixture();
    data.questions = [];
    expect(validateAtlas(data).join(' ')).toContain('count mismatch');
    delete data.papers[0].expectedQuestionCount;
    expect(validateAtlas(data).join(' ')).toContain('expectedQuestionCount');
  });

  it('rejects a cross-library question link', () => {
    const data = fixture();
    data.questions[0].libraryId = 'another';
    expect(validateAtlas(data).join(' ')).toContain('unknown paper');
  });

  it('rejects unsafe sources and LaTeX commands', () => {
    const data = fixture();
    data.questions[0].source.url = 'javascript:alert(1)';
    data.methods[0].formula = '\\href{https://example.org}{link}';
    const errors = validateAtlas(data).join(' ');
    expect(errors).toContain('HTTPS');
    expect(errors).toContain('LaTeX');
  });
});
