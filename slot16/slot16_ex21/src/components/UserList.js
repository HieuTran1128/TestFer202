import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function UserList({ users }) {
  return (
    <Card>
      <Card.Header>
        <h2>Bài 1: User List</h2>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {users.map(user => (
            <ListGroup.Item key={user.id} action as={Link} to={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserList;