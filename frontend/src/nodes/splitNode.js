import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const SplitNode = ({ id, data }) => {
  return (
    <BaseNode title="Split">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
      />
      <div style={{ fontSize: '14px', textAlign: 'center' }}>
        <span>Splits input into two outputs</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output1`}
        style={{ top: '30%' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output2`}
        style={{ top: '70%' }}
      />
    </BaseNode>
  );
};