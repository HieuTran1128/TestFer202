import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";

function Example2() {
  const [show, setShow] = useState(false);
  const handleButtonClick = () => setShow(true);
  const handleAlertClose = () => setShow(false);

  return (
    <div>
      <h3>Alert Example</h3>
      <Button onClick={handleButtonClick}>Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </div>
  );
}

export default Example2;