import React from "react";
import { Col, Card, Button, Form } from "react-bootstrap";

const StudentCard = ({ student }) => (
  <Col md={6} lg={3} className="mb-4">
    <Card>
      <Card.Img variant="top" src={student.image} style={{ height: "250px" }} />
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
);
export default StudentCard;