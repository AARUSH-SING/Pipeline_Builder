import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'contains');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode title="Filter">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
      />
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
          Condition:
          <select value={condition} onChange={handleConditionChange} style={{
            width: '100%',
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9',
            color: '#333',
          }}>
            <option value="contains">Contains</option>
            <option value="equals">Equals</option>
            <option value="startsWith">Starts With</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </BaseNode>
  );
};