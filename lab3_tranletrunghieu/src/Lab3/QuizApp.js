import React, { Component } from "react";
import Question from "./Question";
import Result from "./Result";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (option) => {
    this.setState({ selectedOption: option }, this.checkAnswer);
  };

  checkAnswer = () => {
    const { currentQuestion, questions, selectedOption, score } = this.state;
    if (selectedOption === questions[currentQuestion].answer) {
      this.setState({ score: score + 1 }, this.moveToNextQuestion);
    } else {
      this.moveToNextQuestion();
    }
  };

  moveToNextQuestion = () => {
    const { currentQuestion, questions } = this.state;
    if (currentQuestion + 1 < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: "",
      });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  replayQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      selectedOption: "",
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, quizEnd, score } = this.state;
    
    if (quizEnd) {
      return <Result score={score} totalQuestions={questions.length} onReplay={this.replayQuiz} />;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ color: "black" }}>Quiz App</h1>
        <Question 
          questionNumber={currentQuestion + 1}
          question={questions[currentQuestion].question} 
          options={questions[currentQuestion].options} 
          onOptionChange={this.handleOptionChange} 
        />
      </div>
    );
  }
}

export default QuizApp;