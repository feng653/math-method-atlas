import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { AtlasNode as AtlasNodeType } from '../domain/graph';

export const AtlasNode = memo(function AtlasNode({ data, selected }: NodeProps<AtlasNodeType>) {
  if (data.compact) return <div className={`atlas-dot-node ${data.kind} ${selected ? 'is-selected' : ''}`}
    title={data.label} style={{ '--branch-color': data.color } as React.CSSProperties}>
    <Handle id="dot-target" type="target" position={Position.Left} isConnectable={false} />
    <span className="node-dot" /><strong>{data.label}</strong>
    <Handle id="dot-source" type="source" position={Position.Left} isConnectable={false} />
  </div>;
  return <div className={`atlas-node ${data.kind} ${selected ? 'is-selected' : ''}`}
    style={{ '--branch-color': data.color } as React.CSSProperties}>
    <Handle id="left-target" type="target" position={Position.Left} isConnectable={false} />
    <Handle id="right-target" type="target" position={Position.Right} isConnectable={false} />
    <Handle id="top-target" type="target" position={Position.Top} isConnectable={false} />
    <Handle id="bottom-target" type="target" position={Position.Bottom} isConnectable={false} />
    <span className="node-dot" />
    <div><strong>{data.label}</strong>{data.kind !== 'method' && <small>{data.subtitle}</small>}</div>
    <Handle id="right-source" type="source" position={Position.Right} isConnectable={false} />
    <Handle id="left-source" type="source" position={Position.Left} isConnectable={false} />
    <Handle id="top-source" type="source" position={Position.Top} isConnectable={false} />
    <Handle id="bottom-source" type="source" position={Position.Bottom} isConnectable={false} />
  </div>;
});
