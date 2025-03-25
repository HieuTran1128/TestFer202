import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:3001/laptops');
        setLaptops(response.data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };
    fetchLaptops();
  }, []);

  return (
    <div className="container mt-4">
      <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem', textAlign: 'center'}}>Laptop List</h2>
      <Row>
        {laptops.map((laptop) => (
          <Col md={3} className="mb-4" key={laptop.id}> 
            <Card
              style={{
                width: '100%',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                borderRadius: '6px',
              }}
            >
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + laptop.image}
                alt={laptop.image}
                style={{
                  height: '110px', 
                  padding: '5px', 
                }}
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start', 
                  padding: '6px',
                }}
              >
                <div>
                  <Card.Title
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      marginBottom: '0.2rem',
                      height: '26px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {laptop.model}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: '0.7rem',
                      height: '40px', 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      marginBottom: '0.2rem', 
                    }}
                  ><strong>Year:</strong> {laptop.year}
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: '0.75rem', 
                      marginBottom: '0.2rem', 
                    }}
                  >
                    <strong>Price:</strong> {laptop.price}
                  </Card.Text>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/laptops/${laptops.id}`)}
                    style={{
                      flex: 1,
                      fontSize: '0.7rem',
                      padding: '3px', 
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
