import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>3. Counter Application</h1>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        -
      </button>
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterApp;
