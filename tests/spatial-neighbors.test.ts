import { expect, it } from 'vitest';
import { nearbyPairs } from '../src/domain/spatial-neighbors';
import { createElasticLayout, stepElasticLayout } from '../src/domain/elastic-layout';
import type { AtlasNode } from '../src/domain/graph';

it('matches brute-force neighbors across negative coordinates and cell boundaries', () => {
  const points = Array.from({ length: 100 }, (_, i) => ({
    position: { x: (i * 197 % 1700) - 850, y: (i * 337 % 1900) - 950 },
  }));
  points.push({ position: { ...points[0].position } });
  const expected: string[] = [];
  for (let i = 0; i < points.length; i++) for (let j = i + 1; j < points.length; j++) {
    if (Math.hypot(points[i].position.x - points[j].position.x,
      points[i].position.y - points[j].position.y) < 300) expected.push(`${i},${j}`);
  }
  expect(nearbyPairs(points, 300).map(pair => pair.join(',')).sort()).toEqual(expected.sort());
});

it('does not read distant points for pairwise distance calculations', () => {
  let reads = 0;
  const points = Array.from({ length: 1000 }, (_, i) => ({
    get position() { reads++; return { x: i * 2000, y: 0 }; },
  }));
  expect(nearbyPairs(points, 800)).toEqual([]);
  expect(reads).toBe(1000);
});

it('repels distant unconnected nodes and attracts along long connections', () => {
  const nodes: AtlasNode[] = ['a', 'b'].map((id, i) => ({ id,
    position: { x: i * 1600, y: 2000 },
    data: { kind: 'method', label: id, subtitle: '', color: '#000' },
  }));
  const isolated = createElasticLayout(nodes, [], true);
  stepElasticLayout(isolated, null, 0);
  expect(isolated.bodies.get('a')!.position.x).toBeLessThan(0);
  expect(isolated.bodies.get('b')!.position.x).toBeGreaterThan(1600);
  const connected = createElasticLayout(nodes, [{ id: 'ab', source: 'a', target: 'b' }], true);
  stepElasticLayout(connected, null, 0);
  expect(connected.bodies.get('a')!.position.x).toBeGreaterThan(0);
  expect(connected.bodies.get('b')!.position.x).toBeLessThan(1600);
});
