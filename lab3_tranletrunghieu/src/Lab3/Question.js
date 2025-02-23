import React from "react";

const Question = ({ question, options, onOptionChange, questionNumber }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ color: "black" }}>Question {questionNumber}</h1>
      <h2 style={{ marginBottom: "20px" }}>{question}</h2>
      <div style={{ border: "2px solid #ddd", padding: "20px", borderRadius: "10px", display: "inline-block", 
        backgroundColor: "#f9f9f9", width: "400px" }}>
        {options.map((option, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <a 
              style={{ color: "white", display: "block", padding: "10px", border: "1px solid", borderRadius: "5px", 
                margin: "5px", backgroundColor: "#01AA85" }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#009272"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#01AA85"}
              onClick={(e) => {e.preventDefault(); onOptionChange(option);}}>
              {option}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
