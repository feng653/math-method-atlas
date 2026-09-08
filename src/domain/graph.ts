import { Position, type Edge, type Node } from '@xyflow/react';
import type { Library, Method } from './schema';
import { separateNodes } from './layout';

export type AtlasNodeData = { label: string; kind: 'root' | 'chapter' | 'method';
  subtitle: string; color: string; chapterId?: string; methodId?: string };
export type AtlasNode = Node<AtlasNodeData>;
export const graphNodeId = (kind: AtlasNodeData['kind'], id: string) => `${kind}:${id}`;
export const subjectColors: Record<string, string> = {
  '高等数学': '#0f766e', '线性代数': '#7660a3', '概率统计': '#aa642c',
};

export function buildGraph(library: Library, methods: Method[], chapterId = '', allMethods = false) {
  methods = methods.filter((method) => method.libraryId === library.id);
  const rootId = graphNodeId('root', library.id);
  const chapters = library.chapters.filter((chapter) => !chapterId || chapter.id === chapterId);
  const nodes: AtlasNode[] = [];
  const edges: Edge[] = [];
  const radius = chapterId ? 360 : 620;
  nodes.push({ id: rootId, type: 'atlas', position: { x: -110, y: -36 },
    data: { label: chapterId ? chapters[0]?.title ?? library.title : library.title,
      kind: 'root', subtitle: chapterId ? '章节视图' : `${library.chapters.length} 个章节 · ${methods.length} 个方法`, color: '#254c47' } });
  if (!chapterId && !allMethods) {
    const half = Math.ceil(chapters.length / 2);
    chapters.forEach((chapter, index) => {
      const left = index < half;
      const row = left ? index : index - half;
      const count = left ? half : chapters.length - half;
      const color = subjectColors[chapter.subject] ?? '#0f766e';
      nodes.push({ id: graphNodeId('chapter', chapter.id), type: 'atlas',
        position: { x: left ? -495 : 285, y: (row - (count - 1) / 2) * 76 - 30 },
        data: { label: chapter.title, kind: 'chapter', color, chapterId: chapter.id,
          subtitle: `${methods.filter((method) => method.chapterId === chapter.id).length} 个方法 · ${chapter.subject}` } });
      edges.push({ id: `branch-${chapter.id}`, source: rootId, target: graphNodeId('chapter', chapter.id),
        sourceHandle: left ? 'left-source' : 'right-source', targetHandle: left ? 'right-target' : 'left-target',
        type: 'default', style: { stroke: color, strokeWidth: 1.6, opacity: 0.32 } });
    });
    return { nodes, edges };
  }
  chapters.forEach((chapter, index) => {
    const angle = -Math.PI / 2 + index * Math.PI * 2 / chapters.length;
    const cx = chapterId ? 0 : Math.cos(angle) * radius;
    const cy = chapterId ? 0 : Math.sin(angle) * radius;
    const color = subjectColors[chapter.subject] ?? '#0f766e';
    const chapterMethods = methods.filter((method) => method.chapterId === chapter.id);
    if (!chapterId) {
      nodes.push({ id: graphNodeId('chapter', chapter.id), type: 'atlas', position: { x: cx - 105, y: cy - 30 },
        data: { label: chapter.title, subtitle: `${chapterMethods.length} 个方法`, kind: 'chapter', color, chapterId: chapter.id } });
      edges.push({ id: `branch-${chapter.id}`, source: rootId, target: graphNodeId('chapter', chapter.id),
        sourceHandle: cx < 0 ? 'left-source' : 'right-source', targetHandle: cx < 0 ? 'right-target' : 'left-target',
        style: { stroke: color, strokeWidth: 2, opacity: 0.4 }, type: 'default' });
    }
    chapterMethods.forEach((method, m) => {
      const arc = chapterId ? Math.PI * 2 : Math.PI * 2 / chapters.length * 0.84;
      const localAngle = chapterId ? m / chapterMethods.length * arc - Math.PI / 2
        : angle + (m - (chapterMethods.length - 1) / 2) * arc / Math.max(chapterMethods.length, 1);
      const distance = chapterId ? 480 : 1080 + (m % 3) * 290;
      const half = Math.ceil(chapterMethods.length / 2);
      const left = m < half;
      const row = left ? m : m - half;
      const sideCount = left ? half : chapterMethods.length - half;
      nodes.push({ id: graphNodeId('method', method.id), type: 'atlas',
        position: chapterId ? { x: left ? -470 : 260, y: (row - (sideCount - 1) / 2) * 100 - 26 }
          : { x: Math.cos(localAngle) * distance - 105, y: Math.sin(localAngle) * distance - 26 },
        sourcePosition: Position.Right, targetPosition: Position.Left,
        data: { label: method.title, subtitle: method.summary, kind: 'method', color,
          methodId: method.id, chapterId: chapter.id } });
      edges.push({ id: `tree-${method.id}`, source: chapterId ? rootId : graphNodeId('chapter', chapter.id),
        sourceHandle: (chapterId ? left : Math.cos(localAngle) < 0) ? 'left-source' : 'right-source',
        targetHandle: (chapterId ? left : Math.cos(localAngle) < 0) ? 'right-target' : 'left-target',
        target: graphNodeId('method', method.id), type: 'default', style: { stroke: color, opacity: 0.26, strokeWidth: 1.2 } });
    });
  });
  return { nodes: allMethods && !chapterId ? separateNodes(nodes) : nodes, edges };
}
