import { describe, expect, it } from 'vitest';
import { articleUrl, resolveArticleLink } from './article';

describe('manuscript navigation', () => {
  it('resolves nested question and method links without losing heading anchors', () => {
    expect(resolveArticleLink('multivariable/problem-types/continuity/index.md', '../../methods/squeeze-estimate.md'))
      .toEqual({ path: 'multivariable/methods/squeeze-estimate.md', anchor: '' });
    expect(resolveArticleLink('multivariable/README.md', 'questions/README.md#来源说明'))
      .toEqual({ path: 'multivariable/questions/README.md', anchor: '来源说明' });
    expect(resolveArticleLink('multivariable/concepts.md', 'https://example.com/paper.pdf')).toBeUndefined();
  });
  it('retains deployed base and atlas route in shareable article links', () => {
    const result = articleUrl('https://example.com/math-method-atlas/#library=math-one&chapter=multivariable',
      'multivariable/methods/squeeze-estimate.md');
    expect(result).toBe('/math-method-atlas/?article=multivariable%2Fmethods%2Fsqueeze-estimate.md#library=math-one&chapter=multivariable');
  });
});
