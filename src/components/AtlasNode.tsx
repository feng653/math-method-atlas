import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { AtlasNode as AtlasNodeType } from '../domain/graph';

export const AtlasNode = memo(function AtlasNode({ data, selected }: NodeProps<AtlasNodeType>) {
  return <div className={`atlas-node ${data.kind} ${selected ? 'is-selected' : ''}`}
    style={{ '--branch-color': data.color } as React.CSSProperties}>
    <Handle id="left-target" type="target" position={Position.Left} isConnectable={false} />
    <Handle id="right-target" type="target" position={Position.Right} isConnectable={false} />
    <span className="node-dot" />
    <div><strong>{data.label}</strong>{data.kind !== 'method' && <small>{data.subtitle}</small>}</div>
    <Handle id="right-source" type="source" position={Position.Right} isConnectable={false} />
    <Handle id="left-source" type="source" position={Position.Left} isConnectable={false} />
  </div>;
});
