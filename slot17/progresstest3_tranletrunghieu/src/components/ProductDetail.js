import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (error) {
        setError(error.response && error.response.status === 404 ? 'Product not found' : 'An error occurred while fetching the product');
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div className="container d-flex flex-column align-items-center mt-5">
        <Alert variant="danger" className="w-50 text-center">{error}</Alert>
        <Button variant="primary" onClick={() => navigate('/products')}>
          ⬅ Back to Product List
        </Button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <Card style={{ width: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + product.image}
          alt={product.name}
          style={{ height: '250px', objectFit: 'contain', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold" style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
            {product.name}
          </Card.Title>
          <Card.Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50' }}>
            Price: <span style={{ color: '#e74c3c' }}>{product.price}</span>
          </Card.Text>
          <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
            {product.description}
          </Card.Text>
          <Card.Text style={{ fontSize: '0.9rem', fontWeight: '500', color: '#27ae60' }}>
            Category: {product.category}
          </Card.Text>
          <Card.Text style={{ fontSize: '0.9rem', fontWeight: '500', color: product.stock > 0 ? '#16a085' : '#c0392b' }}>
            {product.stock > 0 ? ` In Stock (${product.stock})` : 'Out of Stock'}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate('/products')}
            style={{ width: '100%', fontWeight: 'bold', padding: '10px', marginTop: '10px' }}
          >
            ⬅ Back to Product List
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
