import { expect, it } from 'vitest';
import { data } from '../src/data/load';
import { buildGraph } from '../src/domain/graph';
import { hierarchyLayout, radialSeed } from '../src/domain/hierarchy-layout';
it('settles the spacious seed before presenting it', () => {
  const result = buildGraph(data.libraries[0], data.methods, '', true, data.problemTypes) as ReturnType<typeof hierarchyLayout>;
  expect(result.relaxation, JSON.stringify(result.relaxation)).toMatchObject({settled:true});
  expect(result.relaxation.maxSpeed).toBeLessThan(0.12);
  expect(result.relaxation.ticks).toBeGreaterThanOrEqual(30);
  const seed = radialSeed(result);
  const width = (nodes: { position: { x: number } }[]) => Math.max(...nodes.map(n => n.position.x)) - Math.min(...nodes.map(n => n.position.x));
  expect(width(result.nodes)).toBeGreaterThan(0);
  expect(width(result.nodes)).toBeLessThan(width(seed.nodes) * 0.5);
});

it('also settles every chapter and the second library', () => {
  for (const library of data.libraries) for (const chapter of library.chapters) {
    const result = buildGraph(library, data.methods, chapter.id, true, data.problemTypes) as ReturnType<typeof hierarchyLayout>;
    expect(result.relaxation.settled, `${library.id}/${chapter.id}: ${JSON.stringify(result.relaxation)}`).toBe(true);
  }
}, 15000);
