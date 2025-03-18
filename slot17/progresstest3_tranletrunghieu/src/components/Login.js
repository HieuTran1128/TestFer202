import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setMessage(`Welcome, ${username}! Login Successful!`);
        setTimeout(() => navigate('/products'), 1000);
      } else {
        alert('Invalid username or password!');
      }
    } catch (error) {
      alert('Error connecting to server!');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;