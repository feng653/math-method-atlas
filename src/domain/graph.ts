import { Position, type Edge, type Node } from '@xyflow/react';
import type { Library, Method, ProblemType } from './schema';
import { separateNodes } from './layout';
import { addProblemTypes } from './problem-graph';
import { hierarchyLayout } from './hierarchy-layout';
import { addTriggerCategories } from './trigger-graph';

export type AtlasNodeData = { label: string; kind: 'root' | 'chapter' | 'method' | 'problem' | 'category';
  subtitle: string; color: string; compact?: boolean; dotSize?: number; chapterId?: string; methodId?: string; problemTypeId?: string; categoryId?: string };
export type AtlasNode = Node<AtlasNodeData>;
export const graphNodeId = (kind: AtlasNodeData['kind'], id: string) => `${kind}:${id}`;
export const subjectColors: Record<string, string> = {
  '高等数学': '#0f766e', '线性代数': '#7660a3', '概率统计': '#aa642c',
};

export function buildGraph(library: Library, methods: Method[], chapterId = '', allMethods = false,
  problemTypes: ProblemType[] = [], problemTypeId = ''): { nodes: AtlasNode[]; edges: Edge[] } {
  methods = methods.filter((method) => method.libraryId === library.id);
  const focused = problemTypes.find((type) => type.libraryId === library.id && type.id === problemTypeId);
  if (focused) {
    const choices = new Set(focused.methods.map((choice) => choice.methodId));
    const local = buildGraph(library, methods.filter((method) => choices.has(method.id))
      .map((method) => ({ ...method, chapterId: focused.chapterId })), focused.chapterId, true);
    local.nodes[0].data = { ...local.nodes[0].data, label: focused.title, kind: 'problem',
      problemTypeId: focused.id, subtitle: `${focused.kind === 'trigger' ? '触发条件 · ' : ''}${choices.size} 个可选方法` };
    return local;
  }
  const rootId = graphNodeId('root', library.id);
  const chapterChoices = new Set(problemTypes.filter((type) => type.libraryId === library.id && type.chapterId === chapterId)
    .flatMap((type) => type.methods.map((choice) => choice.methodId)));
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
    const chapterMethods = methods.filter((method) => method.chapterId === chapter.id || (!!chapterId && chapterChoices.has(method.id)));
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
  const graph = { nodes: allMethods && !chapterId ? separateNodes(nodes) : nodes, edges };
  const groups = problemTypes.filter((type) => type.libraryId === library.id && (!chapterId || type.chapterId === chapterId));
  return hierarchyLayout(addTriggerCategories(addProblemTypes(graph, groups, chapterId, library.id), groups), allMethods && !chapterId);
}
