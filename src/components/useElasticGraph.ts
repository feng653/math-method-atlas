import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import type { Edge, NodeChange } from '@xyflow/react';
import type { AtlasNode } from '../domain/graph';
import { createElasticLayout, stepElasticLayout, type ElasticLayout } from '../domain/elastic-layout';

export function useElasticGraph(nodes: AtlasNode[], edges: Edge[], enabled: boolean,
  setNodes: Dispatch<SetStateAction<AtlasNode[]>>) {
  const simulation = useRef<ElasticLayout>(null!);
  if (!simulation.current) simulation.current = createElasticLayout(nodes, edges);
  const pinned = useRef<string | null>(null);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    simulation.current = createElasticLayout(nodes, edges); pinned.current = null;
  }, [nodes, edges]);
  useEffect(() => {
    if (!enabled || reduced) return;
    let frame = 0, previous = 0;
    const tick = (time: number) => {
      if (!document.hidden && time - previous >= 32) {
        previous = time;
        stepElasticLayout(simulation.current, pinned.current, time);
        setNodes((current) => current.map((node) => {
          const body = simulation.current.bodies.get(node.id);
          return body && node.id !== pinned.current ? { ...node, position: { ...body.position } } : node;
        }));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, reduced, setNodes]);
  function drag(node: AtlasNode) {
    pinned.current = node.id;
    const body = simulation.current.bodies.get(node.id);
    if (body) { body.position = { ...node.position }; body.vx = 0; body.vy = 0; }
  }
  return { active: enabled && !reduced, drag,
    sync: (changes: NodeChange<AtlasNode>[]) => {
      for (const change of changes) if (change.type === 'position' && change.position) {
        const body = simulation.current.bodies.get(change.id);
        if (body) { body.position = { ...change.position }; body.vx = 0; body.vy = 0; }
      }
    },
    release: (node: AtlasNode) => { drag(node); pinned.current = null; },
    reset: () => { simulation.current = createElasticLayout(nodes, edges); pinned.current = null; } };
}
