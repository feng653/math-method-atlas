import { describe, expect, it } from 'vitest';
import { resolveSource, sourceHref, sourceSchema, sourceLocationLabel, type Source } from '../src/domain/source';

const paper: Source = {
  url: 'https://example.org/paper.pdf',
  metadata: {
    publisher: '示例大学', level: 'university-hosted', checkedOn: '2026-09-08',
    availability: 'available', evidence: '下载并核对题号，仅证明高校托管。',
    bodyMode: 'external-link', rightsNote: '未确认全文转载许可。',
  },
};

describe('source evidence boundaries', () => {
  it('inherits only the same source URL and preserves question page', () => {
    expect(resolveSource({ url: paper.url, page: 3 }, paper)).toEqual({ ...paper, page: 3 });
    const other = { url: 'https://example.org/other.pdf', page: 2 };
    expect(resolveSource(other, paper)).toEqual(other);
  });
  it('preserves question-specific evidence over paper metadata', () => {
    const question: Source = { ...paper, metadata: { ...paper.metadata!, availability: 'unavailable' } };
    expect(resolveSource(question, paper).metadata?.availability).toBe('unavailable');
  });
  it('inherits question anchors but never a different query-selected resource', () => {
    expect(resolveSource({ url: `${paper.url}#question-3` }, paper).metadata).toEqual(paper.metadata);
    expect(resolveSource({ url: `${paper.url}?edition=other` }, paper).metadata).toBeUndefined();
  });
  it('accepts legacy unknown evidence and rejects invalid or empty audit metadata', () => {
    expect(sourceSchema.safeParse({ url: paper.url }).success).toBe(true);
    expect(sourceSchema.safeParse(paper).success).toBe(true);
    expect(sourceSchema.safeParse({ ...paper, metadata: { ...paper.metadata, checkedOn: '2026-02-30' } }).success).toBe(false);
    expect(sourceSchema.safeParse({ ...paper, metadata: { ...paper.metadata, evidence: ' ' } }).success).toBe(false);
  });
  it('replaces old fragments for page navigation without damaging query parameters', () => {
    expect(sourceHref({ url: 'https://example.org/paper.pdf?download=1#old', page: 3 }))
      .toBe('https://example.org/paper.pdf?download=1#page=3');
    expect(sourceHref({ url: 'https://example.org/paper#question-3' }))
      .toBe('https://example.org/paper#question-3');
  });
  it('labels article image order without inventing PDF page navigation', () => {
    const source: Source = { url: 'https://example.org/article.html', page: 4, locatorKind: 'image-index' };
    expect(sourceHref(source)).toBe(source.url);
    expect(sourceLocationLabel(source)).toBe('文章第 4 张试卷图');
    expect(sourceSchema.safeParse({ url: source.url, locatorKind: 'image-index' }).success).toBe(false);
  });
});
