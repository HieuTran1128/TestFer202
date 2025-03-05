import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import AnswerOption from "./AnswerOption";

const Question = ({
  question,
  answers,
  questionIndex,
  userAnswer,
  onAnswerSelect,
}) => {
  return (
    <div
      className="card mb-4 shadow border-0 rounded-3 bg-dark text-white"
      style={{ transition: "all 0.3s ease", border: "2px solid #01AA85" }}
    >
      <div className="card-body p-4">
        <h3 className="card-title d-flex align-items-center mb-4">
          <FaQuestionCircle
            className="me-2 fs-4"
            style={{ color: "#01AA85" }}
          />
          <span className="fs-4 fw-bold">
            Question {questionIndex + 1}: {question}
          </span>
        </h3>
        {answers.map((answer, index) => (
          <AnswerOption
            key={index}
            answer={answer}
            questionIndex={questionIndex}
            selectedAnswer={userAnswer}
            onAnswerSelect={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
