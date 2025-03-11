import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

function Home() {
  const images = [
    `/img/menu-01.jpg`,
    `/img/menu-02.jpg`,
    `/img/menu-03.jpg`,
    `/img/menu-04.jpg`,
    `/img/menu-05.jpg`,
    `/img/menu-06.jpg`,
  ];
  
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={`/img/slide1.jpg`} alt="First slide" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={`/img/slide2.jpg`} alt="Second slide" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={`/img/slide3.jpg`} alt="Third slide" />
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
      
      <Row className="justify-content-center">
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={2} key={index} className="text-center">
            <img
              src={image}
              alt={`Menu ${index + 1}`}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
              }}
            />
          </Col>
        ))}
      </Row>

      <h1 style={{color: 'red'}}>This is Home Page</h1>
    </div>
  );
}

export default Home;