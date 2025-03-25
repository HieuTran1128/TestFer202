import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    question: 'What is React?',
    options: ['A JavaScript library', 'A programming language', 'A database', 'An operating system'],
    correctAnswer: 'A JavaScript library'
  },
  {
    id: 2,
    question: 'What is used for routing in React?',
    options: ['React Router', 'React Navigator', 'React Paths', 'React Links'],
    correctAnswer: 'React Router'
  }
];

function Quiz() {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div 
      className="container my-5"
      style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}
    >
      <div 
        className="card border-0 shadow-lg"
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        <div 
          className="card-header bg-gradient-primary text-white p-4"
          style={{
            background: 'linear-gradient(45deg, #007bff, #00b4ff)',
            padding: '25px',
            borderBottom: 'none'
          }}
        >
          <h1 
            className="display-5 fw-bold mb-0"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'white'
            }}
          >
            Quiz Challenge
          </h1>
          <p 
            className="lead mt-2"
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Test Your React Knowledge
          </p>
        </div>
        <div 
          className="card-body p-4"
          style={{ padding: '30px' }}
        >
          {questions.map((q, index) => (
            <Question 
              key={q.id} 
              question={q} 
              onAnswerChange={handleAnswerChange}
              selectedAnswer={answers[q.id]}
              submitted={submitted}
              questionNumber={index + 1}
            />
          ))}
          <div 
            className="d-flex justify-content-between align-items-center mt-5"
            style={{ marginTop: '30px' }}
          >
            {!submitted ? (
              <button 
                className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow-sm"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== questions.length}
                style={{
                  background: 'linear-gradient(45deg, #007bff, #00b4ff)',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  cursor: Object.keys(answers).length !== questions.length ? 'not-allowed' : 'pointer'
                }}
                onMouseOver={e => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.target.style.transform = 'translateY(0)'}
              >
                Submit Your Answers
              </button>
            ) : (
              <div 
                className="w-100"
                style={{ width: '100%' }}
              >
                <div 
                  className="alert alert-success d-flex align-items-center justify-content-between"
                  style={{
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    padding: '15px',
                    borderRadius: '8px'
                  }}
                >
                  <div>
                    <h3 
                      className="h4 fw-bold mb-1"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#155724'
                      }}
                    >
                      Quiz Completed!
                    </h3>
                    <p 
                      className="mb-0"
                      style={{
                        fontSize: '1rem',
                        color: '#155724'
                      }}
                    >
                      Your Score: {score}/{questions.length} ({((score/questions.length) * 100).toFixed(1)}%)
                    </p>
                  </div>
                  <button 
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                      setScore(0);
                    }}
                    style={{
                      borderRadius: '6px',
                      padding: '5px 15px',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={e => e.target.style.transform = 'translateY(-2px)'}
                    onMouseOut={e => e.target.style.transform = 'translateY(0)'}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;  