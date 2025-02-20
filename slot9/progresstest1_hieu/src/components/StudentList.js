import React from "react";
import { Container, Row } from "react-bootstrap";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Students Detail</h2>
    <Row>
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </Row>
  </Container>
);
export default StudentList;