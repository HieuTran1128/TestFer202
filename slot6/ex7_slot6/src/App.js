import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const cards = [
  { color: "primary", text: "Some text inside the first card" },
  { color: "warning", text: "Some text inside the first card" },
  { color: "danger", text: "Some text inside the first card" },
];

function App() {
  return (
    <Container className="mt-4">
      <h2>Cards Columns</h2>
      <Row>
        {cards.map((card, index) => (
          <Col md={4} key={index}>
            <Card className={`bg-${card.color} text-white text-center p-3`}>
              <Card.Img
                variant="top"
                src="https://mitsubishihaiduong.com.vn/uploads/21.jpg"
                alt="Car Image"
                className="p-3"
              />
              <Card.Body>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
