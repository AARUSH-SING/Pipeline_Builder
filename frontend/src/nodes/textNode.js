// textNode.js

import { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variables = useMemo(() => {
    const matches = currText.match(/\{\{(\w+)\}\}/g);
    if (!matches) return [];
    const unique = [...new Set(matches.map(m => m.slice(2, -2)))];
    return unique;
  }, [currText]);

  const lines = currText.split('\n');
  const maxLineLength = Math.max(...lines.map(line => line.length));
  const dynamicWidth = Math.max(220, maxLineLength * 8 + 40);
  const dynamicHeight = Math.max(100, lines.length * 20 + 60);

  const nodeStyle = {
    width: dynamicWidth,
    height: dynamicHeight,
  };

  return (
    <BaseNode title="Text" style={nodeStyle}>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${(index + 1) * 100 / (variables.length + 1)}%` }}
        />
      ))}
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              minHeight: '60px',
              padding: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              color: '#333',
              resize: 'none',
              fontFamily: 'inherit',
              fontSize: '14px',
            }}
            rows={lines.length}
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
}
