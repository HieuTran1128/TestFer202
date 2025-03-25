import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/Login.css";

const Login = ({ onLogin }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Đặt âm lượng 50%
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/home"); // Nếu đã đăng nhập, chuyển hướng đến Home
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const user = users.find((u) => u.username === username && u.password === password);

      if (!user) {
        setError("Tài khoản hoặc mật khẩu không đúng!");
        setIsLoading(false);
        return;
      }

      if (!user.active) {
        setError("Tài khoản của bạn không hoạt động. Vui lòng liên hệ quản trị viên!");
        setIsLoading(false);
        return;
      }

      onLogin(user);
      alert(`Đăng nhập thành công! Chào mừng ${user.role === "admin" ? "Quản trị viên" : "Người dùng"}!`);
      navigate("/home"); // Chuyển hướng đến trang Home
    } catch (err) {
      console.error("Lỗi khi đăng nhập:", err.response || err.message || err);
      if (err.response) {
        setError(`Lỗi từ server: ${err.response.data.message || err.response.statusText}`);
      } else if (err.request) {
        setError("Không thể kết nối đến server. Vui lòng kiểm tra lại!");
      } else {
        setError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <Container fluid className="login-page">
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/theme.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <Row className="vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center login-image-col">
          <Image src="/images/login.jpg" alt="Pokémon Scarlet and Violet" fluid className="login-image" />
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center login-form-col">
          <div className="login-form">
            <h2 className="text-center mb-4">LOGIN</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label className="form-label">User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Button type="submit" className="login-button w-100" disabled={isLoading}>
                {isLoading ? "LOGGING..." : "LOGIN"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
