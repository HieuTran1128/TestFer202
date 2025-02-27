import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";

const DishCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={dish.image} alt={dish.name} />
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.description}</Card.Text>
        <Card.Text><strong>${dish.price}</strong></Card.Text>
        <Button variant="primary" onClick={() => addToCart(dish)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;