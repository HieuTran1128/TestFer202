import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import FormInput from "./FormInput";
import FormAlert from "./FormAlert";

const UserProfile2 = ({ name = "", age = "", email = "", phone = "", termsAccepted = false, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: name,
    age: age,
    email: email,
    phone: phone,
    termsAccepted: termsAccepted,
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
        termsAccepted: false,
      });
    }
  };

  return (
    <Container className="mt-4">
      <h3>Thông Tin Người Dùng</h3>
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
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

UserProfile2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

};

UserProfile2.defaultProps = {
  name: "",
  age: "",
  termsAccepted: false,
};

export default UserProfile2;