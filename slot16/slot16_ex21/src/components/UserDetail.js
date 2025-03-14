import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Alert, ListGroup } from 'react-bootstrap';

function UserDetail({ users }) {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <Alert variant="warning">User not found</Alert>;
  }

  return (
    <Card>
      <Card.Header>
        <Button as={Link} to="/users" variant="primary" size="sm">
          Back to Users
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>First Name:</strong> {user.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Age:</strong> {user.age}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserDetail;