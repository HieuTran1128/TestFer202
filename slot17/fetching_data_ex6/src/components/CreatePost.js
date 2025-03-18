import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    try {
      await axios.post("http://localhost:3001/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      setTimeout(() => navigate("/posts"), 1000);
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi khi tạo bài viết:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Thêm bài viết mới</h1>
      {status && (
        <Alert variant={status.includes("thành công") ? "success" : "danger"}>
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="content" className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Tạo bài viết
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
