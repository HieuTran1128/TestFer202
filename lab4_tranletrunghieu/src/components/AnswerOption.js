import React from "react";
import { FaCircle } from "react-icons/fa";

const AnswerOption = ({
  answer,
  questionIndex,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div
      className={`card border-0 shadow-sm mb-3 ${
        selectedAnswer === answer
          ? "bg-dark text-white border-success"
          : "bg-dark text-light"
      }`}
    >
      <div
        className="card-body d-flex align-items-center p-3 rounded"
        style={{
          cursor: "pointer",
          border: selectedAnswer === answer ? "2px solid #01AA85" : "none",
          transition: "all 0.3s ease",
        }}
        onClick={() => onAnswerSelect(questionIndex, answer)}
      >
        <input
          type="radio"
          name={`question-${questionIndex}`}
          value={answer}
          checked={selectedAnswer === answer}
          onChange={() => onAnswerSelect(questionIndex, answer)}
          id={`answer-${questionIndex}-${answer}`}
          className="d-none"
        />
        <label
          htmlFor={`answer-${questionIndex}-${answer}`}
          className="d-flex align-items-center w-100 mb-0"
        >
          <FaCircle
            size={14}
            className={`me-3 ${
              selectedAnswer === answer ? "text-success" : "text-teal"
            }`}
            style={{ color: "#01AA85" }}
          />
          <span className="fs-5 fw-medium">{answer}</span>
        </label>
      </div>
    </div>
  );
};

export default AnswerOption;
