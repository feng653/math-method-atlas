import { describe, expect, it } from 'vitest';
import { data } from '../src/data/load';
import type { ProblemType } from '../src/domain/schema';
import { validateAtlas } from '../src/domain/validate';
import { getProblemQuestions } from '../src/domain/problem-types';
import { buildGraph } from '../src/domain/graph';
import { atlasRouteHash, resolveAtlasRoute } from '../src/domain/route';

const library = data.libraries.find((item) => item.id === 'math-one')!;
const method = data.methods.find((item) => item.libraryId === library.id)!;
const sample: ProblemType = { id: 'sample-type', libraryId: library.id, chapterId: method.chapterId,
  title: '测试题型', summary: '题型按目标归类', recognition: ['识别目标'], strategy: ['判断条件'],
  methods: [{ methodId: method.id, when: '满足方法条件' }], questionIds: [], boundaries: ['测试'], status: 'draft',
  formulas: [{ id: 'sample-formula', title: '测试公式', latex: '1=1', conditions: ['测试条件'],
    derivation: '恒等式', methodIds: [method.id] }] };

describe('problem type contracts', () => {
  it('rejects missing methods, unknown questions, formula choices and duplicate type IDs', () => {
    const invalid = structuredClone(sample);
    invalid.methods[0].methodId = 'missing'; invalid.questionIds = ['missing-question'];
    const errors = validateAtlas({ ...data, problemTypes: [invalid, invalid] }).join('\n');
    expect(errors).toContain('unknown method'); expect(errors).toContain('unknown question');
    expect(errors).toContain('formula method absent'); expect(errors).toContain('duplicate problem type');
  });
  it('does not infer problem membership from a shared method or another library', () => {
    expect(getProblemQuestions(sample, data.questions)).toEqual([]);
    const question = data.questions.find((item) => item.libraryId === library.id)!;
    expect(getProblemQuestions({ ...sample, questionIds: [question.id] }, [question,
      { ...question, libraryId: 'another' }])).toEqual([question]);
  });
  it('adds shared task parents without duplicating methods and focuses cross-chapter choices', () => {
    const sibling = { ...sample, id: 'second-type' };
    const graph = buildGraph(library, data.methods, '', true, [sample, sibling]);
    expect(graph.nodes.filter((node) => node.data.methodId === method.id)).toHaveLength(1);
    expect(graph.edges.filter((edge) => edge.target === `method:${method.id}`)).toHaveLength(2);
    const other = data.methods.find((item) => item.libraryId === library.id && item.chapterId !== method.chapterId)!;
    const cross = { ...sample, methods: [...sample.methods, { methodId: other.id, when: '跨章复用' }] };
    const focused = buildGraph(library, data.methods, method.chapterId, true, [cross], cross.id);
    expect(focused.nodes.filter((node) => node.data.kind === 'method')).toHaveLength(2);
    expect(focused.nodes.some((node) => node.data.methodId === other.id)).toBe(true);
    const chapter = buildGraph(library, data.methods, method.chapterId, true, [cross]);
    expect(chapter.nodes.filter((node) => node.data.methodId === other.id)).toHaveLength(1);
    expect(chapter.edges.some((edge) => edge.source === `problem:${cross.id}` && edge.target === `method:${other.id}`)).toBe(true);
  });
  it('round-trips a task deep link and rejects cross-library task IDs', () => {
    const content = { ...data, problemTypes: [sample] };
    const hash = atlasRouteHash(library.id, '', '', sample.id);
    expect(resolveAtlasRoute(hash, content).problemTypeId).toBe(sample.id);
    expect(resolveAtlasRoute(`#library=proof-toolkit&type=${sample.id}`, content).notice).not.toBe('');
  });
});
