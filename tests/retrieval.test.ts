import { describe, expect, it } from 'vitest';
import type { Library, Method, Question } from '../src/domain/schema';
import { searchMethods } from '../src/domain/search';
import { getMethodStats } from '../src/domain/statistics';
import { getCoverage } from '../src/domain/coverage';

const method: Method = {
  id: 'lhopital', libraryId: 'math', chapterId: 'limits', title: '洛必达法则', summary: '求未定式极限',
  conditions: ['满足导数比条件'], steps: ['检查 0/0 型'], formula: '', pitfalls: ['不能略过条件'],
  example: { prompt: '自编例题', solution: '答案' }, relatedIds: [], topicIds: ['limit'], status: 'draft',
};
function question(id: string, paperId: string, verification: 'pending' | 'verified'): Question {
  return { id, paperId, libraryId: 'math', number: id, summary: '摘要', source: { url: 'https://example.org' },
    methodLinks: [{ methodId: 'lhopital', verification, note: '核验说明' }] };
}

describe('retrieval and evidence', () => {
  it('searches conditions, normalizes width and requires all query terms', () => {
    expect(searchMethods([method], '导数 条件')).toHaveLength(1);
    expect(searchMethods([method], '０／０')).toHaveLength(1);
    expect(searchMethods([method], '导数 不存在')).toEqual([]);
    expect(searchMethods([method], '  ')).toEqual([method]);
  });
  it('counts verified questions separately from distinct papers', () => {
    const questions = [question('q1', 'p1', 'verified'), question('q2', 'p1', 'verified'), question('q3', 'p2', 'pending')];
    expect(getMethodStats('lhopital', questions)).toMatchObject({ questionCount: 2, paperCount: 1 });
    expect(getMethodStats('missing', questions).questionCount).toBe(0);
  });
  it('does not inflate counts from repeated questions or links', () => {
    const item = question('q1', 'p1', 'verified');
    item.methodLinks.push({ ...item.methodLinks[0] });
    expect(getMethodStats('lhopital', [item, item])).toMatchObject({ questionCount: 1, paperCount: 1 });
  });
  it('reports uncovered topics and separates written from reviewed coverage', () => {
    const library: Library = {
      schemaVersion: 1, id: 'math', title: '数学', description: '方法',
      syllabus: { version: '2026', sourceUrl: 'https://example.org', reviewStatus: 'draft' },
      chapters: [{ id: 'limits', title: '极限', subject: '高数', syllabusTopics: [
        { id: 'limit', title: '极限计算' }, { id: 'continuity', title: '连续性' },
      ] }],
    };
    const unrelated = { ...method, id: 'other', libraryId: 'other', topicIds: ['continuity'], status: 'reviewed' as const };
    expect(getCoverage(library, [method, unrelated])).toEqual({ total: 2, written: 1, reviewed: 0,
      missing: [{ id: 'continuity', title: '连续性' }] });
    expect(getCoverage(library, [{ ...method, status: 'reviewed' }]).reviewed).toBe(1);
  });
});
