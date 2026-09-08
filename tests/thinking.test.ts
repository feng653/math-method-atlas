import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { data } from '../src/data/load';
import { validateThinking, thinkingCoverage } from '../src/domain/thinking';
import { buildGraph } from '../src/domain/graph';
import { primaryEdgeIds } from '../src/domain/edge-layout';
import { ProblemTypeDetail } from '../src/components/ProblemTypeDetail';

const library = data.libraries.find((item) => item.id === 'math-one')!;
it('keeps the stratified sample traceable across all years and core chapters', () => {
  expect(validateThinking(data)).toEqual([]);
  const coverage = thinkingCoverage(library, data.thinkingSamples, data.papers, data.problemTypes, data.questions);
  expect(coverage.chapters).toHaveLength(22);
  expect(coverage.coveredChapters).toBe(22);
  expect(coverage.years).toEqual(Array.from({ length: 18 }, (_, i) => 2009 + i));
  expect(coverage.unsupportedTriggers).toEqual([]);
  expect(coverage.sampleCount).toBeGreaterThanOrEqual(52);
  const other = { ...library, id: 'empty' };
  expect(thinkingCoverage(other, data.thinkingSamples, data.papers, data.problemTypes, data.questions).sampleCount).toBe(0);
});
it('rejects invented evidence, unsupported chapter coverage and duplicate samples', () => {
  const sample = data.thinkingSamples[0];
  const invalid = { ...sample, triggerIds: ['missing'], methodIds: ['not-verified'], chapterIds: ['no-chapter'] };
  const errors = validateThinking({ ...data, thinkingSamples: [invalid, invalid] }).join('\n');
  expect(errors).toContain('unknown trigger');
  expect(errors).toContain('verified question evidence');
  expect(errors).toContain('chapter lacks supporting');
  expect(errors).toContain('duplicate thinking sample');
  expect(validateThinking({ ...data, thinkingSamples: [{ ...sample, id: 'another' }] }).join()).toContain('ID must equal question ID');
});
it('preserves all triggers and methods in categorized full and focused graphs', () => {
  for (const chapter of ['', 'basic-thinking']) {
    const graph = buildGraph(library, data.methods, chapter, true, data.problemTypes);
    expect(graph.nodes.filter((node) => node.data.kind === 'category')).toHaveLength(4);
    const triggerIds = data.problemTypes.filter((group) => group.kind === 'trigger').map((group) => group.id);
    expect(triggerIds.every((id) => graph.nodes.some((node) => node.data.problemTypeId === id))).toBe(true);
    const primary = primaryEdgeIds(graph.nodes, graph.edges);
    expect(primary.size).toBe(graph.nodes.length - 1);
    expect(graph.edges.every((edge) => graph.nodes.some((node) => node.id === edge.source)
      && graph.nodes.some((node) => node.id === edge.target))).toBe(true);
  }
  const algebra = buildGraph(library, data.methods, 'la-matrices', true, data.problemTypes);
  expect(algebra.nodes.some((node) => node.data.kind === 'category')).toBe(false);
});
it('renders original reasoning with a source link without inventing trigger frequency', () => {
  const type = data.problemTypes.find((item) => item.id === 'basic-partition')!;
  const html = renderToStaticMarkup(React.createElement(ProblemTypeDetail, { type, methods: data.methods,
    questions: data.questions, papers: data.papers, samples: data.thinkingSamples, onSelect: () => {}, onClose: () => {} }));
  expect(html).toContain('在真题中怎样想到');
  expect(html).toContain('先按开关值分层');
  expect(html).toContain('查看原题来源');
  expect(html).toContain('不是考试频次');
  expect(html).not.toContain('历年真题 ·');
  expect(html).not.toContain('NaN');
});
