import React from 'react';

function Question({ question, onAnswerChange, selectedAnswer, submitted, questionNumber }) {
  const handleChange = (e) => {
    if (!submitted) {
      onAnswerChange(question.id, e.target.value);
    }
  };

  return (
    <div 
      className="mb-5 p-3 bg-light rounded-3 shadow-sm"
      style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      <h4 
        className="fw-semibold mb-3"
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#333'
        }}
      >
        <span 
          className="badge bg-dark me-2"
          style={{
            backgroundColor: '#212529',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
        >
          {questionNumber}
        </span>
        {question.question}
      </h4>
      <div className="d-grid gap-2">
        {question.options.map((option) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = option === selectedAnswer;
          let className = 'btn btn-outline-dark text-start py-2 px-3';
          
          if (submitted) {
            if (isCorrect) {
              className = 'btn btn-success text-start py-2 px-3';
            } else if (isSelected && !isCorrect) {
              className = 'btn btn-danger text-start py-2 px-3';
            }
          }

          return (
            <label 
              key={option} 
              className="d-flex align-items-center"
              style={{ marginBottom: '8px' }}
            >
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleChange}
                disabled={submitted}
                className="me-2"
                style={{
                  cursor: submitted ? 'not-allowed' : 'pointer',
                  marginRight: '10px'
                }}
              />
              <span 
                className={className}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #ced4da',
                  backgroundColor: submitted && isCorrect ? '#d4edda' : 
                                 submitted && isSelected && !isCorrect ? '#f8d7da' : 'white',
                  color: submitted && isCorrect ? '#155724' : 
                         submitted && isSelected && !isCorrect ? '#721c24' : '#212529',
                  padding: '10px 15px'
                }}
              >
                {option}
                {submitted && isCorrect && (
                  <span 
                    className="float-end"
                    style={{ fontSize: '1.2rem', marginLeft: '10px' }}
                  >
                    ✓
                  </span>
                )}
                {submitted && isSelected && !isCorrect && (
                  <span 
                    className="float-end"
                    style={{ fontSize: '1.2rem', marginLeft: '10px' }}
                  >
                    ✗
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Question;