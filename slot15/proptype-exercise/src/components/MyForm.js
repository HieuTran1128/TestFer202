import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import FormInput from "./FormInput";
import FormAlert from "./FormAlert";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    case "RESET":
      return {
        name: "",
        age: "",
        email: "",
        phone: "",
        termsAccepted: false,
        isSubmitted: false,
      };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit, initialData = {} }) => {
  const initialState = {
    name: initialData.name || "",
    age: initialData.age || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    termsAccepted: initialData.termsAccepted || false,
    isSubmitted: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!state.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải chứa từ 3-50 ký tự!";
    }

    const ageNum = parseInt(state.age);
    if (!state.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = "Tuổi phải là số từ 18-100!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!state.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!phoneRegex.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải chứa 10-15 chữ số!";
    }

    if (!state.termsAccepted) {
      newErrors.terms = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
      dispatch({ type: "RESET" });
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
          value={state.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label="Tuổi"
          name="age"
          type="number"
          value={state.age}
          onChange={handleChange}
          error={errors.age}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Số điện thoại"
          name="phone"
          type="text"
          value={state.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormInput
          label="Đồng ý với điều khoản"
          name="termsAccepted"
          type="checkbox"
          value={state.termsAccepted}
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

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
    phone: PropTypes.string,
    termsAccepted: PropTypes.bool,
  }),
};

MyForm.defaultProps = {
  initialData: {},
};

export default MyForm;