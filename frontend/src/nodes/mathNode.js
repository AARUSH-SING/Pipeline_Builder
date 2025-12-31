import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode title="Math">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-a`}
        style={{ top: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-b`}
        style={{ top: '75%' }}
      />
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
          Operation:
          <select value={operation} onChange={handleOperationChange} style={{
            width: '100%',
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9',
            color: '#333',
          }}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-result`}
      />
    </BaseNode>
  );
};