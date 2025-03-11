import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const FormAlert = ({ show, message }) => {
  if (!show) return null;
  return (
    <Alert variant="danger">
      <strong>Lỗi:</strong> {message}
    </Alert>
  );
};

FormAlert.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default FormAlert;