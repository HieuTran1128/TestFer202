import React, { useState } from 'react';
import { FaBook, FaArrowRight } from 'react-icons/fa';
import Question from './Question';
import Modal from 'react-bootstrap/Modal';

const Quiz = () => {
  const quizData = [
    {
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system',
      ],
      correctAnswer: 'A JavaScript library for building user interfaces',
    },
    {
      question: 'What is JSX?',
      answers: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript',
      ],
      correctAnswer: 'A syntax extension for JavaScript',
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    console.log('Selected:', questionIndex, selectedAnswer);
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: selectedAnswer }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => setShowResultModal(true);

  const handleCloseModal = () => {
    setShowResultModal(false);
    setUserAnswers({});
    setCurrentQuestion(0);
  };

  const calculateScore = () =>
    quizData.filter((item, index) => userAnswers[index] === item.correctAnswer).length;

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      <nav className="navbar shadow py-3" style={{ backgroundColor: '#01AA85' }}>
        <div className="container">
          <span className="navbar-brand d-flex align-items-center text-white">
            <FaBook className="me-2 fs-3" />
            <h1 className="h4 mb-0">Quiz App</h1>
          </span>
        </div>
      </nav>
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-4">
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div
                  className="progress-bar"
                  style={{
                    width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
                    backgroundColor: '#01AA85',
                  }}
                >
                  {currentQuestion + 1}/{quizData.length}
                </div>
              </div>
            </div>
            <Question
              question={quizData[currentQuestion].question}
              answers={quizData[currentQuestion].answers}
              questionIndex={currentQuestion}
              userAnswer={userAnswers[currentQuestion]}
              onAnswerSelect={handleAnswerSelect}
            />
            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn text-white btn-lg shadow"
                style={{ backgroundColor: '#01AA85' }}
                onClick={currentQuestion === quizData.length - 1 ? handleSubmit : handleNext}
              >
                {currentQuestion === quizData.length - 1 ? 'Submit' : 'Next Question'}
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Modal show={showResultModal} onHide={handleCloseModal} centered backdrop="static">
        <Modal.Header closeButton style={{ backgroundColor: '#01AA85', color: 'white' }}>
          <Modal.Title>Quiz Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="fw-bold" style={{ color: 'red'}}>Quiz Completed</h2>
          <p className="fs-4 fw-bold">
            You got {calculateScore()}/{quizData.length} questions correct!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn text-white"
            style={{ backgroundColor: '#01AA85' }}
            onClick={handleCloseModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quiz;