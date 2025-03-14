import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

function DishList({ dishes }) {
  return (
    <div>
      <h2 className="mb-4">Bài 2: Dish List</h2>
      <Row xs={1} md={2} className="g-4">
        {dishes.map(dish => (
          <Col key={dish.id}>
            <Card className="text-center border shadow-sm" style={{ maxWidth: '300px', margin: '0 auto' }}>
              <Card.Img
                variant="top"
                src={dish.image}
                alt={dish.name}
                style={{
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                }}
              />
              <Card.Body>
                <Card.Title as={Link} to={`/dishes/${dish.id}`} className="text-primary text-decoration-underline">
                  {dish.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DishList;