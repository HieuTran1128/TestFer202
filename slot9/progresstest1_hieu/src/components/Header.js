import React from "react";
import { Container, Navbar, Nav, Form, Button, Image } from "react-bootstrap";
import { FaHome, FaInfo, FaIdCard, FaList } from "react-icons/fa";

const Header = () => (
  <Navbar style={{ backgroundColor: "#FFCC80" }} expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <Image src="image/fpt.png" height="auto" width="100px" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#"><FaHome className="me-1" />Trang chủ</Nav.Link>
        <Nav.Link href="#"><FaInfo className="me-1" />Ngành học</Nav.Link>
        <Nav.Link href="#"><FaIdCard className="me-1" />Tuyển sinh</Nav.Link>
        <Nav.Link href="#"><FaList className="me-1" />Sinh viên</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Button variant="outline-none" className="me-2">Search</Button>
        <Form.Control type="search" />
      </Form>
    </Container>
  </Navbar>
);
export default Header;