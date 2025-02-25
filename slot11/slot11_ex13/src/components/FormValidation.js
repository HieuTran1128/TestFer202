import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email không hợp lệ. Vui lòng nhập lại!";
};

const validatePassword = (password) => {
  return password.length >= 8 ? "" : "Mật khẩu phải có ít nhất 8 ký tự!";
};

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setEmailError(touched.email ? validateEmail(email) : "");
    setPasswordError(touched.password ? validatePassword(password) : "");
    setIsFormValid(!emailError && !passwordError && email !== "" && password !== "");
  }, [email, password, touched]);

  return (
    <Container className="d-flex justify-content-center mt-4">
      <div className="w-50 p-4 border rounded shadow bg-light">
        <h4 className="text-center mb-3">Ex5: Validate emails</h4>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              isValid={touched.email && !emailError}
              isInvalid={touched.email && !!emailError}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              isValid={touched.password && !passwordError}
              isInvalid={touched.password && !!passwordError}
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="mt-4 w-100" variant="primary" type="submit" disabled={!isFormValid}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormValidation;