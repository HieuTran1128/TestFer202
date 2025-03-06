import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Example1() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => setCount(count + 1);

  return (
    <div>
      <h3>Counter Example</h3>
      <h5>Count: {count}</h5>
      <Button onClick={handleButtonClick}>Increase Count</Button>
    </div>
  );
}

export default Example1;