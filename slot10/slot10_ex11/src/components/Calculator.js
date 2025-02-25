import React, { useState } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const computeResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (isNaN(num1) || isNaN(num2)) return;

    let res;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        res = "Error";
    }
    setResult(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <table style={{ margin: "0 auto", borderSpacing: "10px" }}>
        <tbody>
          <tr>
            <td><label>First:</label></td>
            <td>
              <input
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td><label>Second:</label></td>
            <td>
              <input
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td><label>Operator:</label></td>
            <td>
              <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              <button onClick={computeResult}>Compute</button>
            </td>
          </tr>
          <tr>
            <td><label>Result:</label></td>
            <td>
              <input type="text" value={result !== null ? result : ""} readOnly />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;