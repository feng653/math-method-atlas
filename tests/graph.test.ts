import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildGraph, graphNodeId } from '../src/domain/graph';
import { librarySchema, methodSchema } from '../src/domain/schema';
import { validateAtlas } from '../src/domain/validate';

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
      const actual = graph.nodes.filter((node) => node.data.kind === 'method').map((node) => node.data.methodId).sort();
      expect(actual).toEqual(methods.filter((method) => method.chapterId === chapter.id).map((method) => method.id).sort());
    }
  });

  it('keeps content IDs separate from root and chapter node IDs', () => {
    const chapterId = library.chapters[0].id;
    const samples = ['root', `chapter-${chapterId}`].map((id) => ({ ...methods[0], id, chapterId,
      topicIds: [library.chapters[0].syllabusTopics[0].id], relatedIds: [] }));
    expect(validateAtlas({ libraries: [library], methods: samples, papers: [], questions: [] })).toEqual([]);
    for (const focused of ['', chapterId]) {
      const graph = buildGraph(library, samples, focused, true);
      const ids = new Set(graph.nodes.map((node) => node.id));
      expect(ids.size).toBe(graph.nodes.length);
      for (const method of samples) {
        expect(graph.nodes.find((node) => node.id === graphNodeId('method', method.id))?.data.methodId).toBe(method.id);
      }
      for (const edge of graph.edges) expect(ids.has(edge.source) && ids.has(edge.target)).toBe(true);
    }
  });

  it('renders a registered library with no methods and ignores other libraries', () => {
    const other = { ...methods[0], libraryId: 'another-library' };
    for (const chapterId of ['', library.chapters[0].id]) {
      const graph = buildGraph(library, [other], chapterId, true);
      expect(graph).toEqual(buildGraph(library, [], chapterId, true));
      expect(graph.nodes.some((node) => node.data.kind === 'root')).toBe(true);
      expect(graph.nodes.filter((node) => node.data.kind === 'method')).toHaveLength(0);
      expect(graph.nodes.every((node) => Number.isFinite(node.position.x) && Number.isFinite(node.position.y))).toBe(true);
    }
  });

  it('keeps rendered node rectangles separate in full and chapter views', () => {
    const collisions: string[] = [];
    for (const chapterId of ['', 'all', ...library.chapters.map((chapter) => chapter.id)]) {
      const { nodes } = buildGraph(library, methods, chapterId === 'all' ? '' : chapterId, chapterId === 'all');
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]; const b = nodes[j];
          const width = a.data.compact ? 264 : 210, height = a.data.compact ? 32 : 60;
          if (Math.abs(a.position.x - b.position.x) < width && Math.abs(a.position.y - b.position.y) < height) {
            collisions.push(`${chapterId || 'all'}: ${a.id} / ${b.id}`);
          }
        }
      }
    }
    expect(collisions).toEqual([]);
  });
});
