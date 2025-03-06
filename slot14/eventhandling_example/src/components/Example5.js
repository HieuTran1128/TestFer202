import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

function Example5() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setAlertMessage(`You selected: ${value}`);
    setShowAlert(true);
  };

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <div>
      <h3>Radio Button Example</h3>
      <Form.Check
        type="radio"
        label="Option 1"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
      />
      <Form.Check
        type="radio"
        label="Option 2"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
      />
      {showAlert && (
        <Alert variant="info" onClose={handleCloseAlert} dismissible>
          {alertMessage}
        </Alert>
      )}
    </div>
  );
}

export default Example5;