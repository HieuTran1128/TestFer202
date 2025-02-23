import React from "react";

const Result = ({ score, totalQuestions, onReplay }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "#01AA85" }}>Quiz Ended</h1>
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <button 
        onClick={onReplay} 
        style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007bff", color: "white", 
          border: "none", borderRadius: "5px", }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}>
        Replay
      </button>
    </div>
  );
};

export default Result;