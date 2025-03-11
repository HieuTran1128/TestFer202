import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showAlert, setShowAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    if (!value && name !== 'agree') {
      newErrors[name] = getErrorMessage(name);
    } else if (name === 'zip' && value && !/^\d{5}$/.test(value)) {
      newErrors.zip = 'Zip code must be exactly 5 digits.';
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const getErrorMessage = (key) => {
    const errorMessages = {
      firstName: 'Please enter your first name.',
      lastName: 'Please enter your last name.',
      username: 'Please choose a username.',
      city: 'Please provide a valid city.',
      state: 'Please provide a valid state.',
      zip: 'Please provide a valid zip.',
      agree: 'You must agree to the terms and conditions.',
    };
    return errorMessages[key] || 'This field is required.';
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'agree') {
        newErrors[key] = getErrorMessage(key);
      }
    });

    if (!formData.zip || !/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = 'Zip code must be exactly 5 digits.';
    }

    if (!formData.agree) {
      newErrors.agree = getErrorMessage('agree');
      setTouched({ ...touched, agree: true }); // Ensure agree is marked as touched
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      username: true,
      city: true,
      state: true,
      zip: true,
      agree: true, // Mark agree as touched on submit
    });

    const isValid = validateForm();

    if (isValid) {
      setShowAlert({ type: 'success', message: 'Form submitted successfully!' });
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
      });
      setErrors({});
      setTouched({});
    } else {
      setShowAlert({ type: 'danger', message: 'Please fix the errors and try again.' });
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {showAlert && (
        <Alert variant={showAlert.type} onClose={() => setShowAlert(null)} dismissible>
          {showAlert.message}
        </Alert>
      )}
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.firstName && !!errors.firstName}
                isValid={touched.firstName && !errors.firstName && formData.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.lastName && !!errors.lastName}
                isValid={touched.lastName && !errors.lastName && formData.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && !!errors.username}
                isValid={touched.username && !errors.username && formData.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="city">
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.city && !!errors.city}
                isValid={touched.city && !errors.city && formData.city}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="state">
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.state && !!errors.state}
                isValid={touched.state && !errors.state && formData.state}
              />
              <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="zip">
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.zip && !!errors.zip}
                isValid={touched.zip && !errors.zip && formData.zip && /^\d{5}$/.test(formData.zip)}
              />
              <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="agree">
          <Form.Check
            required
            name="agree"
            label="Agree to terms and conditions"
            onChange={handleChange}
            checked={formData.agree}
            isInvalid={touched.agree && !!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
            className={touched.agree && !!errors.agree ? 'text-danger' : ''} // Add red color to label
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default Contact;