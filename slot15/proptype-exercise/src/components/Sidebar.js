import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h4>Sidebar</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/user-profile">
          UserProfile
        </Nav.Link>
        <Nav.Link as={Link} to="/user-profile2">
          UserProfile2
        </Nav.Link>
        <Nav.Link as={Link} to="/my-form">
          MyForm
        </Nav.Link>
        <Nav.Link as={Link} to="/form-validation">
          FormWithValidation
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;