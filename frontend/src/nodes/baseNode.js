import React from 'react';

export const BaseNode = ({ title, children, style }) => {
  const defaultStyle = { 
    width: 220, 
    height: 100, 
    border: '2px solid #667eea',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const mergedStyle = { ...defaultStyle, ...style };
  return (
    <div style={mergedStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
        {title}
      </div>
      {children}
    </div>
  );
};