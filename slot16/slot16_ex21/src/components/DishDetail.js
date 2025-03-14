import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Alert, ListGroup, Badge } from 'react-bootstrap';

function DishDetail({ dishes }) {
  const { dishId } = useParams();
  const dish = dishes.find(d => d.id === parseInt(dishId));

  if (!dish) {
    return <Alert variant="warning">Dish not found</Alert>;
  }

  return (
    <Card>
      <Card.Header>
        <Button as={Link} to="/dishes" variant="primary" size="sm">
          Back to Dishes
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Img
          variant="top"
          src={dish.image}
          alt={dish.name}
          className="mb-3 mx-auto d-block"
          style={{
            maxWidth: '300px', 
            height: '200px',  
            objectFit: 'cover', 
          }}
        />
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Category:</strong> {dish.category}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Price:</strong> ${dish.price}
          </ListGroup.Item>
          {dish.label && (
            <ListGroup.Item>
              <strong>Label:</strong>{' '}
              <Badge bg={dish.label === 'Hot' ? 'danger' : 'success'}>
                {dish.label}
              </Badge>
            </ListGroup.Item>
          )}
          <ListGroup.Item>
            <strong>Description:</strong> {dish.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Featured:</strong>{' '}
            <Badge bg={dish.featured ? 'success' : 'secondary'}>
              {dish.featured ? 'Yes' : 'No'}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default DishDetail;