import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const validateInput = (value) => {
    return value.length >= 5; 
};

function ValidatedInput() {
    const [value, setValue] = useState(""); 
    const [isValid, setIsValid] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(""); 

    useEffect(() => {
        const isValidInput = validateInput(value);
        setIsValid(isValidInput); 
        if (!isValidInput) {
            setErrorMessage("Giá trị phải có ít nhất 5 ký tự!"); 
        } else {
            setErrorMessage(""); 
        }
    }, [value]); 

    return (
        <Container className="d-flex justify-content-center mt-4">
            <div className="w-50 p-3 border rounded shadow-sm bg-light">
                <Form>
                <h4 className="text-center mb-3">Ex4: Form validation</h4>
                    <Form.Group controlId="validatedInput">
                        <Form.Label>Nhập một giá trị</Form.Label>
                        <Form.Control
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)} 
                            isValid={isValid} 
                            isInvalid={!isValid} 
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessage}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className="mt-3" variant="primary" type="submit" disabled={!isValid}>
                        Gửi
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default ValidatedInput;
