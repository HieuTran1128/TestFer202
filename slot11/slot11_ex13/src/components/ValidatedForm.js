import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ValidatedForm = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [name, gender, country, termsAccepted]);

    const validateForm = () => {
        let newErrors = {};
        if (name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long.";
        }
        if (!gender) {
            newErrors.gender = "Please select a gender.";
        }
        if (!country) {
            newErrors.country = "Please select a country.";
        }
        if (!termsAccepted) {
            newErrors.terms = "You must agree to the terms and conditions.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <Container className="d-flex justify-content-center mt-4">
            <div className="w-50 p-4 border rounded shadow bg-light">
                <h4 className="text-center mb-3">Ex6: Validated form</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            isInvalid={!!errors.name} />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                    <br />

                    <Form.Group>
                        <Form.Label>Gender:</Form.Label>
                        <div className="d-flex flex-row gap-3">
                            <Form.Check type="radio" label="Male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                            <Form.Check type="radio" label="Female" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                            <Form.Check type="radio" label="Other" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
                        </div>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </Form.Group>
                    <br />

                    <Form.Group controlId="country">
                        <Form.Label>Country:</Form.Label>
                        <Form.Control as="select" value={country} 
                            onChange={(e) => setCountry(e.target.value)} 
                            isInvalid={!!errors.country}>
                            <option value="">Select</option>
                            <option value="Danang">Đà Nẵng</option>
                            <option value="Hanoi">Hà Nội</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                    </Form.Group>
                    <br />

                    <Form.Group controlId="terms">
                        <Form.Check type="checkbox" 
                            label="I agree to the terms and conditions" 
                            checked={termsAccepted} 
                            onChange={(e) => setTermsAccepted(e.target.checked)} 
                        />
                        {errors.terms && <div className="text-danger">{errors.terms}</div>}
                    </Form.Group>
                    <br />

                    <Button className="w-100" type="submit" variant="primary" disabled={!isFormValid}>Submit</Button>
                </Form>
            </div>
        </Container>
    );
};

export default ValidatedForm;