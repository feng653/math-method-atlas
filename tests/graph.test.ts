import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildGraph } from '../src/domain/graph';
import { librarySchema, methodSchema } from '../src/domain/schema';

const root = resolve('content/libraries/math-one');
const library = librarySchema.parse(JSON.parse(readFileSync(resolve(root, 'library.json'), 'utf8')));
const methods = readdirSync(resolve(root, 'methods')).filter((name) => name.endsWith('.json'))
  .map((name) => methodSchema.parse(JSON.parse(readFileSync(resolve(root, 'methods', name), 'utf8'))));

describe('graph integrity', () => {
  it('creates unique node ids and edges pointing to existing nodes', () => {
    const graph = buildGraph(library, methods);
    const ids = new Set(graph.nodes.map((node) => node.id));
    expect(ids.size).toBe(graph.nodes.length);
    expect(new Set(graph.edges.map((edge) => edge.id)).size).toBe(graph.edges.length);
    for (const edge of graph.edges) {
      expect(ids.has(edge.source)).toBe(true);
      expect(ids.has(edge.target)).toBe(true);
    }
  });

  it('limits chapter view to its requested methods', () => {
    for (const chapter of library.chapters) {
      const graph = buildGraph(library, methods, chapter.id);
      const actual = graph.nodes.filter((node) => node.data.kind === 'method').map((node) => node.id).sort();
      expect(actual).toEqual(methods.filter((method) => method.chapterId === chapter.id).map((method) => method.id).sort());
    }
  });

  it('keeps 210 x 60 node rectangles separate in full and chapter views', () => {
    const collisions: string[] = [];
    for (const chapterId of ['', 'all', ...library.chapters.map((chapter) => chapter.id)]) {
      const { nodes } = buildGraph(library, methods, chapterId === 'all' ? '' : chapterId, chapterId === 'all');
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]; const b = nodes[j];
          if (Math.abs(a.position.x - b.position.x) < 210 && Math.abs(a.position.y - b.position.y) < 60) {
            collisions.push(`${chapterId || 'all'}: ${a.id} / ${b.id}`);
          }
        }
      }
    }
    expect(collisions).toEqual([]);
  });
});
