import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import type { Edge, NodeChange } from '@xyflow/react';
import type { AtlasNode } from '../domain/graph';
import { createElasticLayout, stepElasticLayout, type ElasticLayout } from '../domain/elastic-layout';
import { createMotionScheduler } from '../domain/motion-scheduler';

export function useElasticGraph(nodes: AtlasNode[], edges: Edge[], enabled: boolean,
  setNodes: Dispatch<SetStateAction<AtlasNode[]>>) {
  const simulation = useRef<ElasticLayout>(null!);
  if (!simulation.current) simulation.current = createElasticLayout(nodes, edges);
  const pinned = useRef<string | null>(null);
  const wake = useRef(() => {});
  const [running, setRunning] = useState(false);
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
    if (!enabled || reduced) { wake.current = () => {}; return; }
    let quietSteps = 0;
    const scheduler = createMotionScheduler({ now: () => performance.now(),
      request: (callback) => requestAnimationFrame(callback), cancel: (id) => cancelAnimationFrame(id) }, (time) => {
        stepElasticLayout(simulation.current, pinned.current, time);
        const moving = [...simulation.current.bodies.values()].some(body => Math.hypot(body.vx, body.vy) >= 0.12);
        quietSteps = moving || pinned.current ? 0 : quietSteps + 1;
        setNodes((current) => {
          let changed = false;
          const next = current.map((node) => {
            const body = simulation.current.bodies.get(node.id);
            if (!body || node.id === pinned.current || Math.hypot(body.position.x - node.position.x,
              body.position.y - node.position.y) < 0.05) return node;
            changed = true;
            return { ...node, position: { ...body.position } };
          });
          return changed ? next : current;
        });
        return quietSteps < 30;
    }, setRunning, matchMedia('(pointer: coarse)').matches ? 50 : 40);
    wake.current = () => { if (!document.hidden) scheduler.wake(); };
    const visibility = () => { if (document.hidden) scheduler.stop(); else wake.current(); };
    document.addEventListener('visibilitychange', visibility);
    wake.current();
    return () => { scheduler.stop(); wake.current = () => {};
      document.removeEventListener('visibilitychange', visibility); };
  }, [nodes, edges, enabled, reduced, setNodes]);
  function drag(node: AtlasNode) {
    pinned.current = node.id;
    const body = simulation.current.bodies.get(node.id);
    if (body) { body.position = { ...node.position }; body.vx = 0; body.vy = 0; }
    wake.current();
  }
  return { active: enabled && !reduced && running, drag,
    sync: (changes: NodeChange<AtlasNode>[]) => {
      for (const change of changes) if (change.type === 'position' && change.position) {
        const body = simulation.current.bodies.get(change.id);
        if (body) { body.position = { ...change.position }; body.vx = 0; body.vy = 0; }
      }
      if (!pinned.current && changes.some((change) => change.type === 'position' && change.position && !change.dragging)) {
        wake.current();
      }
    },
    release: (node: AtlasNode) => { drag(node); pinned.current = null; wake.current(); },
    reset: () => { simulation.current = createElasticLayout(nodes, edges); pinned.current = null; wake.current(); } };
}
