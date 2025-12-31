import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  return (
    <BaseNode title="Delay">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
      />
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
          Delay (ms):
          <input
            type="number"
            value={delay}
            onChange={handleDelayChange}
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              color: '#333',
            }}
          />
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