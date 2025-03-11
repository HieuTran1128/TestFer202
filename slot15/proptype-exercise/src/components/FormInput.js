import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormInput = ({ label, name, type, value, onChange, error, isCheckbox }) => {
  return (
    <Form.Group controlId={`form${name}`} className="mb-3">
      <Form.Label>{label}</Form.Label>
      {isCheckbox ? (
        <Form.Check
          type="checkbox"
          name={name}
          label={label}
          checked={value}
          onChange={onChange}
          isInvalid={!!error}
        />
      ) : (
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
        />
      )}
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCheckbox: PropTypes.bool,
};

FormInput.defaultProps = {
  type: "text",
  isCheckbox: false,
};

export default FormInput;