import React from "react";
import DishCard from "./DishCard";
import { Row, Col } from "react-bootstrap";

const DishesList = ({ dishes }) => {
  return (
    <Row>
      {dishes.map((dish) => (
        <Col md={4} key={dish.id}>
          <DishCard dish={dish} />
        </Col>
      ))}
    </Row>
  );
};

export default DishesList;
