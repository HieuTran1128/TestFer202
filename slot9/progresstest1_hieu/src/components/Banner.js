import React from "react";
import { Container, Image } from "react-bootstrap";

const Banner = () => (
  <Container fluid className="text-center p-3" style={{ backgroundColor: "orange" }}>
    <Image src="image/banner.png" fluid />
  </Container>
);
export default Banner;