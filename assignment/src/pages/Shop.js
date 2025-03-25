import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/Shop.css";

const Shop = ({ cart, setCart, user }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    fetchProducts();
  }, [user, navigate]);

  const handleAddToCart = (product) => {
    if (typeof setCart !== "function") {
      console.error("setCart is not a function. Kiểm tra lại cách truyền props từ App.js.");
      return;
    }

    if (product.status === "upcoming") {
      alert(`${product.name} chưa ra mắt. Vui lòng chờ đến khi sản phẩm có sẵn!`);
      return;
    }

    const currentCart = Array.isArray(cart) ? cart : [];
    const existingItem = currentCart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = currentCart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCart = [...currentCart, { ...product, quantity: 1 }];
      setCart(newCart);
    }

    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  const handleNavigateToAddProduct = () => {
    navigate("/add-product");
  };

  const isAdmin = user?.role?.toLowerCase() === "admin";

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop-page">
      <Container>
        {/* Thanh tìm kiếm */}
        <Row className="mb-3">
          <Col md={6} className="mx-auto">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        <Row>
          {filteredProducts.length === 0 ? (
            <Col>
              <p>Không có sản phẩm nào phù hợp.</p>
            </Col>
          ) : (
            filteredProducts.map((product) => (
              <Col md={4} sm={6} key={product.id} className="mb-4">
                <Card className={`product-card ${product.status === "upcoming" ? "upcoming" : ""}`}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Text className="product-price">${product.price.toFixed(2)}</Card.Text>
                    <Card.Text className="product-status">
                      {product.status === "available" ? "Available" : "Coming Soon"}
                    </Card.Text>
                    <Button
                      className="add-to-cart-btn w-100"
                      onClick={() => handleAddToCart(product)}
                      disabled={product.status === "upcoming" || isAdmin}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

Shop.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default Shop;