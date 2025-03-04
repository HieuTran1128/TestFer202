import React, { useReducer, useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import ProgressTimer from './ProgressTimer';
import QuestionDisplay from './QuestionDisplay';
import Feedback from './Feedback';
import ScoreBoard from './ScoreBoard';

const initialState = {
  questions: [
    { id: 1, question: 'What is the capital of Australia?', options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'], answer: 'Canberra' },
    { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
    { id: 3, question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], answer: 'Pacific Ocean' },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
  feedback: null
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
      return { 
        ...state, 
        selectedOption: action.payload,
        feedback: isCorrect 
          ? 'Correct! 🎉' 
          : `Incorrect! The correct answer is ${state.questions[state.currentQuestion].answer}`
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        score: state.selectedOption === state.questions[state.currentQuestion].answer ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: '',
        showScore: state.currentQuestion + 1 === state.questions.length,
        feedback: null
      };
    case 'RESTART_QUIZ':
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;

  useEffect(() => {
    if (!showScore && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showScore]);

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === questions.length) {
      const newHighScore = Math.max(highScore, score);
      localStorage.setItem('highScore', newHighScore);
      setHighScore(newHighScore);
    }
    dispatch({ type: 'NEXT_QUESTION' });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4">
      <Card 
        style={{ 
          backgroundColor: '#262626', 
          border: 'none', 
          borderRadius: '10px', 
          padding: '20px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
          color: '#e6e6e6' 
        }}
      >
        {showScore ? (
          <ScoreBoard 
            score={score} 
            total={questions.length} 
            highScore={highScore} 
            onRestart={() => dispatch({ type: 'RESTART_QUIZ' })}
          />
        ) : (
          <>
            <ProgressTimer 
              current={currentQuestion + 1} 
              total={questions.length} 
              timeLeft={timeLeft}
            />
            <QuestionDisplay 
              question={questions[currentQuestion]} 
              selectedOption={selectedOption}
              onSelect={(option) => dispatch({ type: 'SELECT_OPTION', payload: option })}
              onNext={handleNextQuestion}
              isLast={currentQuestion === questions.length - 1}
              disabled={!selectedOption}
            />
            <Feedback feedback={feedback} />
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;