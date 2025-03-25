import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/AddProduct.css";

const AddProduct = ({ user }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "console",
    price: "",
    image: "",
    status: "available",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }
    if (user?.role?.toLowerCase() !== "admin") {
      navigate("/shop", { replace: true });
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      const price = parseFloat(newProduct.price);
      if (price < 0) {
        setFormError("Giá không thể nhỏ hơn 0!");
        setIsSubmitting(false);
        return;
      }

      const productToAdd = {
        name: newProduct.name,
        category: newProduct.category,
        price: price,
        image: newProduct.image || "/products/default-product.jpg",
        status: newProduct.status,
      };

      await axios.post("http://localhost:3001/products", productToAdd);
      alert("Product added successfully!");
      navigate("/shop");
    } catch (error) {
      console.error("Error adding product:", error.response || error.message || error);
      setFormError(
        `Failed to add product: ${
          error.response?.data?.message || error.message || "Unknown error"
        }. Please try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="add-product-page mt-5">
      <h2 className="text-center mb-4">Thêm Sản Phẩm Mới</h2>
      <div className="add-product-form-container">
        <Form onSubmit={handleAddProduct}>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Form.Group className="mb-3" >
            <Form.Label className="form-label-add">Tên Sản Phẩm</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Nhập tên sản phẩm"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-add">Danh Mục</Form.Label>
            <Form.Select name="category" value={newProduct.category} onChange={handleInputChange}>
              <option value="console">Console</option>
              <option value="game">Game</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-add">Giá</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Nhập giá sản phẩm"
              min="0"
              step="0.01"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-add">Hình Ảnh (URL)</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="Nhập URL hình ảnh"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="form-label-add">Trạng Thái</Form.Label>
            <Form.Select name="status" value={newProduct.status} onChange={handleInputChange}>
              <option value="available">Available</option>
              <option value="upcoming">Coming Soon</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={() => navigate("/shop")} disabled={isSubmitting}>
              Hủy
            </Button>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang Thêm..." : "Thêm Sản Phẩm"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

AddProduct.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default AddProduct;