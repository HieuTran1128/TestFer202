import React from 'react';
import { Button } from 'react-bootstrap';

function ScoreBoard({ score, total, highScore, onRestart }) {
  return (
    <div className="text-center">
      <h2 style={{ color: '#fff' }}>Your Score: {score} / {total}</h2>
      <h3 style={{ color: '#01AA85' }}>High Score: {highScore}</h3>
      <Button 
        onClick={onRestart} 
        style={{
          backgroundColor: '#01AA85',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          transition: 'all 0.3s',
          boxShadow: '0 2px 8px rgba(1, 170, 133, 0.4)'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#018f6b')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#01AA85')}
      >
        Restart Quiz
      </Button>
    </div>
  );
}

export default ScoreBoard;