import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import FormInput from "./FormInput";
import FormAlert from "./FormAlert";

const FormWithValidation = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải chứa từ 3-50 ký tự!";
    }

    const ageNum = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = "Tuổi phải là số từ 18-100!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải chứa 10-15 chữ số!";
    }

    if (!formData.termsAccepted) {
      newErrors.terms = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        termsAccepted: false,
      });
    }
  };

  return (
    <Container className="mt-4">
      <h3>{title}</h3>
      <FormAlert show={showAlert} message="Vui lòng kiểm tra lại thông tin!" />
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Tên"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label="Tuổi"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Số điện thoại"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormInput
          label="Đồng ý với điều khoản"
          name="termsAccepted"
          type="checkbox"
          value={formData.termsAccepted}
          onChange={handleChange}
          error={errors.terms}
          isCheckbox={true}
        />
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

FormWithValidation.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormWithValidation;