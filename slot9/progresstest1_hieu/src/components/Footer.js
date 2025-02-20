import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaFax, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <Container fluid className="text-dark py-4" style={{ backgroundColor: "orange" }}>
    <Row>
      <Col md={2}></Col>
      <Col md={3} className="text-start">
        <h5>Our Address</h5>
        <p>Khu đô thị FPT Đà Nẵng</p>
        <p><FaPhone /> +8402311111</p>
        <p><FaFax /> +852 8765 4321</p>
        <p><FaEnvelope /> <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a></p>
      </Col>
      <Col md={3}></Col>
      <Col md={2} className="d-flex align-items-center">
        <FaGooglePlusG className="me-2" />
        <FaFacebookF className="me-2" />
        <FaLinkedinIn className="me-2" />
        <FaTwitter className="me-2" />
        <FaYoutube className="me-2" />
        <FaEnvelope />
      </Col>
      <Col md={2}></Col>
    </Row>
    <Row>
      <Col className="text-center mt-3">
        <p>&copy; Copyright 2023</p>
      </Col>
    </Row>
  </Container>
);
export default Footer;