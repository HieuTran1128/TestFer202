import './App.css';
import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4">
        <Container>
          <Row className="w-100 align-items-center">
            <Col md={1}>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Col>
            <Col md={8}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <Nav.Link href="#dropdown">Dropdown</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Carousel className="my-3">
        <Carousel.Item>
          <div className="d-block w-100 bg-secondary" style={{ height: "530px" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bg-secondary" style={{ height: "530px" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bg-secondary" style={{ height: "530px" }}></div>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className="mb-4">
          <Col md={1}></Col>
          <Col md={10}>
            <h3>NEW PRODUCT</h3>
            <p>List product description</p>
            <Row>
              {[...Array(4)].map((_, idx) => (
                <Col key={idx} md={3}>
                  <div className="bg-secondary" style={{ width: "100%", height: "280px" }}></div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <h3>NEW PRODUCT</h3>
            <p>List product description</p>
            <Row>
              {[...Array(4)].map((_, idx) => (
                <Col key={idx} md={3}>
                  <Card className="mb-3">
                    <div className="bg-secondary" style={{ width: "100%", height: "280px" }}></div>
                    <Card.Body>
                      <Card.Title>Product</Card.Title>
                      <Card.Text className="d-flex justify-content-between">
                        <del>100,000 vnd</del> <span className="text-warning">80,000 vnd</span>
                      </Card.Text>
                      <Button variant="primary" className="me-2"><FaShoppingCart /></Button>
                      <Button variant="outline-primary">Xem chi tiết</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>      
    </>
  );
};

export default App;
