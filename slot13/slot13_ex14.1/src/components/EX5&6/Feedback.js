import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Feedback({ feedback }) {
  if (!feedback) return null;
  
  return (
    <div className="mt-3" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
      {feedback.includes('Correct') ? (
        <span style={{ color: '#01AA85' }}><FaCheckCircle /> {feedback}</span>
      ) : (
        <span style={{ color: '#e74c3c' }}><FaTimesCircle /> {feedback}</span>
      )}
    </div>
  );
}

export default Feedback;