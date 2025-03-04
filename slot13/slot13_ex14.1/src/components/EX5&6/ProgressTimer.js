import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function ProgressTimer({ current, total, timeLeft }) {
  return (
    <>
      <ProgressBar 
        now={(current / total) * 100} 
        label={`${current}/${total}`} 
        className="mb-3"
        style={{ 
          backgroundColor: '#333333', 
          height: '20px', 
          borderRadius: '5px' 
        }}
        variant="custom"
        animated
      />
      <div className="mb-3" style={{ color: '#e6e6e6', fontSize: '1.1rem' }}>
        Time left: <span style={{ color: timeLeft < 5 ? '#e74c3c' : '#01AA85', fontWeight: 'bold' }}>{timeLeft}s</span>
      </div>
    </>
  );
}

export default ProgressTimer;