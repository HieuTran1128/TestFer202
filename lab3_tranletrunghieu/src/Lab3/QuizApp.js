import React, { useReducer } from "react";
import Result from "./Result";

const initialState = {
  currentQuestion: 0,
  score: 0,
  selectedOptions: {},
  quizEnd: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_OPTION":
      if (state.selectedOptions[state.currentQuestion] !== undefined) return state;

      const isCorrect = action.payload.option === action.payload.correctAnswer;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [state.currentQuestion]: action.payload.option,
        },
        score: isCorrect ? state.score + 1 : state.score,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      };

    case "REPLAY_QUIZ":
      return initialState;

    case "END_QUIZ":
      return { ...state, quizEnd: true };

    default:
      return state;
  }
};

const QuizApp = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
    {
      question: "What is the capital of Vietnam?",
      options: ["Hanoi", "Ho Chi Minh", "Da Nang", "Hue"],
      answer: "Hanoi",
    },
  ];

  const handleOptionChange = (option) => {
    dispatch({
      type: "SELECT_OPTION",
      payload: { option, correctAnswer: questions[state.currentQuestion].answer },
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz App</h1>
      {!state.quizEnd ? (
        <>
          <h2>{questions[state.currentQuestion].question}</h2>
          {questions[state.currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={{
                margin: "10px",
                padding: "10px",
                backgroundColor:
                  state.selectedOptions[state.currentQuestion] === option
                    ? option === questions[state.currentQuestion].answer
                      ? "#4CAF50"
                      : "#FF5733"
                    : "#01AA85",
                color: "white",
                fontWeight:
                  state.selectedOptions[state.currentQuestion] === option ? "bold" : "normal",
              }}
              onClick={() => handleOptionChange(option)}
              disabled={state.selectedOptions[state.currentQuestion] !== undefined}
            >
              {option}
            </button>
          ))}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
              disabled={state.currentQuestion === 0}
            >
              Previous Question
            </button>
            <button onClick={() => dispatch({ type: "NEXT_QUESTION" })} disabled={state.currentQuestion === questions.length - 1}>
              Next Question
            </button>
            <button onClick={() => dispatch({ type: "END_QUIZ" })}>
              Submit
            </button>
          </div>
        </>
      ) : (
        <Result
          score={state.score}
          totalQuestions={questions.length}
          onReplay={() => dispatch({ type: "REPLAY_QUIZ" })}
        />
      )}
    </div>
  );
};

export default QuizApp;
