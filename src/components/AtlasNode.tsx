import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { AtlasNode as AtlasNodeType } from '../domain/graph';

export const AtlasNode = memo(function AtlasNode({ data, selected }: NodeProps<AtlasNodeType>) {
  const size = data.dotSize ?? 18;
  return <div className={`atlas-anchor ${data.kind} ${selected ? 'is-selected' : ''}`}
    title={data.label} style={{ '--branch-color': data.color, '--dot-size': `${size}px` } as React.CSSProperties}>
    {['dot'].flatMap(side => ['target', 'source'].map(type =>
      <Handle key={`${side}-${type}`} id={`${side}-${type}`} type={type as 'source' | 'target'}
        position={Position.Left} isConnectable={false} />))}
    <span className="node-dot" />
    <div className="fixed-node-label">
      <strong>{data.label}</strong>
      {!data.compact && data.kind !== 'method' && <small>{data.subtitle}</small>}
    </div>
  </div>;
});
