import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>1. You clicked {count} times</p>
      <button 
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white' }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;
