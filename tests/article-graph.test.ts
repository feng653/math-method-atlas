import { describe, expect, it } from 'vitest';
import { articles, data } from '../src/data/load';
import { buildGraph } from '../src/domain/graph';
import { articleUrl, resolvePageRoute, selectionUrl } from '../src/domain/article';
import { validateArticleBindings } from '../src/domain/article-bindings';

const library = data.libraries.find(item => item.id === 'math-one')!;
const base = 'https://example.com/math-method-atlas/';
describe('published multivariable manuscript graph', () => {
  it('connects every task to its tools, sharing each tool node exactly once', () => {
    const graph = buildGraph(library, data.methods, 'multivariable', true, data.problemTypes);
    expect(graph.nodes.filter(node => node.data.kind === 'problem')).toHaveLength(21);
    expect(graph.nodes.filter(node => node.data.kind === 'method')).toHaveLength(41);
    expect(new Set(graph.nodes.map(node => node.id)).size).toBe(graph.nodes.length);
    const types = data.problemTypes.filter(type => type.chapterId === 'multivariable' && type.article);
    for (const type of types) for (const choice of type.methods) {
      expect(graph.edges.some(edge => edge.source === `problem:${type.id}`
        && edge.target === `method:${choice.methodId}`), `${type.id}/${choice.methodId}`).toBe(true);
    }
  });
  it('updates the selected graph node when an article link is followed', () => {
    const path = 'multivariable/methods/squeeze-estimate.md';
    const url = articleUrl(`${base}#library=math-one&chapter=multivariable`, path, '', data);
    const route = resolvePageRoute(new URL(url, base).href, data, articles);
    expect(route.methodId).toBe('tool-multivariable-squeeze-estimate');
    expect(route.articlePath).toBe(path);
    const chapterless = resolvePageRoute(`${base}?article=${path}#library=math-one`, data, articles);
    expect(chapterless.methodId).toBe(route.methodId);
  });
  it('retains legacy tools still explicitly referenced by another active task', () => {
    const legacy = new Set(data.methods.filter(method => method.supersededBy).map(method => method.id));
    const types = data.problemTypes.filter(type => !type.supersededBy
      && type.methods.some(choice => legacy.has(choice.methodId)));
    expect(types.length).toBeGreaterThan(0);
    for (const type of types) {
      const graph = buildGraph(library, data.methods, type.chapterId, true, data.problemTypes, type.id);
      expect(graph.nodes.filter(node => node.data.kind === 'method').map(node => node.data.methodId).sort())
        .toEqual(type.methods.map(choice => choice.methodId).sort());
    }
  });
  it('does not keep an unrelated article after selecting a legacy graph node', () => {
    const stale = `${base}?article=multivariable/methods/continuity-substitution.md#library=math-one&method=hm-newton-leibniz`;
    const route = resolvePageRoute(stale, data, articles);
    expect(route.methodId).toBe('hm-newton-leibniz');
    expect(route.articlePath).toBe('');
    expect(selectionUrl(stale, '#library=math-one&method=hm-newton-leibniz')).not.toContain('article=');
  });
  it('rejects deleted manuscripts and unregistered tool articles', () => {
    const broken = { ...articles };
    delete broken['multivariable/methods/squeeze-estimate.md'];
    broken['multivariable/methods/unregistered.md'] = '# 工具';
    const errors = validateArticleBindings(data, broken, {});
    expect(errors.join('\n')).toContain('missing manuscript multivariable/methods/squeeze-estimate.md');
    expect(errors.join('\n')).toContain('unregistered.md: missing graph node');
  });
});
