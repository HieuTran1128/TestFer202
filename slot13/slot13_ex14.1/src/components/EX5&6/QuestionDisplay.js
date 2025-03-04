import React from 'react';
import { Button } from 'react-bootstrap';

function QuestionDisplay({ question, selectedOption, onSelect, onNext, isLast, disabled }) {
  const isOptionSelected = !!selectedOption; 

  return (
    <div>
      <h4 style={{ color: '#fff', marginBottom: '20px' }}>{question.question}</h4>
      {question.options.map((option, index) => (
        <Button
          key={index}
          variant={selectedOption === option ? 'success' : 'outline-secondary'}
          className="m-2 w-100"
          onClick={() => onSelect(option)}
          disabled={isOptionSelected}
          style={{
            backgroundColor: selectedOption === option ? '#01AA85' : 'transparent',
            borderColor: '#01AA85',
            color: selectedOption === option ? '#fff' : '#e6e6e6',
            padding: '10px',
            borderRadius: '8px',
            transition: 'all 0.3s',
            boxShadow: selectedOption === option ? '0 2px 8px rgba(1, 170, 133, 0.4)' : 'none',
            opacity: isOptionSelected && selectedOption !== option ? 0.6 : 1 
          }}
          onMouseOver={(e) => !isOptionSelected && (e.target.style.backgroundColor = '#333333')}
          onMouseOut={(e) => !isOptionSelected && (e.target.style.backgroundColor = 'transparent')}
        >
          {option}
        </Button>
      ))}
      <Button
        variant="primary"
        className="mt-3"
        disabled={disabled}
        onClick={onNext}
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
        {isLast ? 'Finish Quiz' : 'Next Question'}
      </Button>
    </div>
  );
}

export default QuestionDisplay;