import { describe, expect, it } from 'vitest';
import { resolveAtlasRoute, atlasRouteHash } from '../src/domain/route';
import { data } from '../src/data/load';

describe('atlas deep links', () => {
  it('restores method and infers its chapter inside the chosen library', () => {
    const route = resolveAtlasRoute('#library=proof-toolkit&method=proof-induction', data);
    expect(route).toEqual({ libraryId: 'proof-toolkit', methodId: 'proof-induction', chapterId: 'proof-basics', notice: '' });
  });
  it('rejects cross-library method ids with visible feedback', () => {
    const route = resolveAtlasRoute('#library=proof-toolkit&method=hm-lhopital', data);
    expect(route.methodId).toBe('');
    expect(route.chapterId).toBe('');
    expect(route.notice).not.toBe('');
  });
  it('does not activate a default-library method from an unknown library URL', () => {
    const route = resolveAtlasRoute('#library=missing&method=hm-lhopital', data);
    expect(route.libraryId).toBe('math-one');
    expect(route.methodId).toBe('');
    expect(route.notice).not.toBe('');
  });
  it('shares chapter views and safely handles nonexistent chapter ids', () => {
    const hash = atlasRouteHash('proof-toolkit', '', 'proof-basics');
    expect(resolveAtlasRoute(hash, data).chapterId).toBe('proof-basics');
    expect(resolveAtlasRoute('#library=proof-toolkit&chapter=missing', data).notice).not.toBe('');
  });
  it('uses a method chapter when a conflicting chapter parameter is present', () => {
    expect(resolveAtlasRoute('#library=proof-toolkit&method=proof-induction&chapter=limits', data).chapterId).toBe('proof-basics');
  });
});
