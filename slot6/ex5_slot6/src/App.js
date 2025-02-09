import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Form, Navbar, Nav, Image } from "react-bootstrap";
import { FaHome, FaInfo, FaIdCard, FaList, FaPhone, FaEnvelope, FaFax, FaFacebookF,
  FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";


const students = [
  { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", location: "DaNang", image: "https://cdn.oneesports.gg/cdn-data/2024/11/HonkaiStarRail_TheHerta_CloseUp_OfficialArt_Wallpaper.jpg" },
  { id: "DE160377", name: "Choy Vĩnh Thiện", location: "QuangNam", image: "https://assetsio.gnwcdn.com/Honkai-Star-Rail-Jing-Yuan-best-build%2C-Ascension-materials%2C-Traces%2C-team%2C-and-Light-Cone-cover.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" },
  { id: "DE160547", name: "Đỗ Nguyễn Phúc", location: "QuangNam", image: "https://preview.redd.it/to-anyone-who-still-hasnt-played-2-3-story-heres-a-tip-to-v0-v9snlxr3nj7d1.png?width=1920&format=png&auto=webp&s=756f4feffe25b4db0a42abbee979eac693ae4890" },
  { id: "DE170049", name: "Lê Hoàng Minh", location: "DaNang", image: "https://gamelandvn.com/wp-content/uploads/anh/2024/09/feixiao-gamelandvn-thumbnail.webp" },
];

function App() {
  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image src="https://fpt.edu.vn/Content/images/assets/2021-FPTU-Eng.png" height="auto" width="100px" />
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#"><FaHome className="me-1" />Trang chủ</Nav.Link>
            <Nav.Link href="#"><FaInfo className="me-1" />Ngành học</Nav.Link>
            <Nav.Link href="#"><FaIdCard className="me-1" />Tuyển sinh</Nav.Link>
            <Nav.Link href="#"><FaList className="me-1" />Sinh viên</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <Container fluid className="text-center p-3 bg-warning">
        <Image src="https://fptcity.vn/wp-content/uploads/truong-fpt-university.jpg" fluid />
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Students Detail</h2>
        <Row>
          {students.map((student, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={student.image} style={{ height: "250px"}}/>
                <Card.Body>
                  <Card.Title>{student.id}</Card.Title>
                  <Card.Text>{student.name}</Card.Text>
                  <Card.Text>{student.location}</Card.Text>
                  <Form>
                    <Form.Check type="radio" label="Absent" name={`status-${student.id}`} />
                    <Form.Check type="radio" label="Present" name={`status-${student.id}`} />
                  </Form>
                  <Button className="mt-2" variant="warning">Submit</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="bg-warning text-dark py-4">
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
    </>
  );
};

export default App;