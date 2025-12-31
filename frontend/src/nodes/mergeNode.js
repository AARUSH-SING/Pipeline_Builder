import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode title="Merge">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input1`}
        style={{ top: '30%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input2`}
        style={{ top: '70%' }}
      />
      <div style={{ fontSize: '14px', textAlign: 'center' }}>
        <span>Merges two inputs</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </BaseNode>
  );
};