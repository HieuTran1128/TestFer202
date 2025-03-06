import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeExample, setActiveExample] = useState("example1");

  const renderContent = () => {
    switch (activeExample) {
      case "example1":
        return <Example1 />;
      case "example2":
        return <Example2 />;
      case "example3":
        return <Example3 />;
      case "example4":
        return <Example4 />;
      case "example5":
        return <Example5 />;
      default:
        return <Example1 />;
    }
  };

  const appStyles = {
    backgroundColor: "black",
    minHeight: "100vh",
    color: "white",
    margin: 0,
    padding: 0
  };

  const sidebarStyles = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    height: "100vh",
    margin: 0
  };

  const navLinkStyles = {
    color: "white",
    marginBottom: "10px",
  };

  const activeNavLinkStyles = {
    backgroundColor: "#01AA85",
    color: "white",
  };

  const contentStyles = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    border: "1px solid #01AA85",
    borderRadius: "5px",
  };

  return (
    <Container fluid style={appStyles}>
      <Row style={{ margin: 0 }}>
        <Col md={3} style={sidebarStyles}>
          <Nav className="flex-column" variant="pills" activeKey={activeExample}>
            <h4 style={{ color: "#01AA85" }}>Examples</h4>
            <Nav.Item>
              <Nav.Link
                eventKey="example1"
                onClick={() => setActiveExample("example1")}
                style={
                  activeExample === "example1"
                    ? { ...navLinkStyles, ...activeNavLinkStyles }
                    : navLinkStyles
                }
              >
                Counter
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="example2"
                onClick={() => setActiveExample("example2")}
                style={
                  activeExample === "example2"
                    ? { ...navLinkStyles, ...activeNavLinkStyles }
                    : navLinkStyles
                }
              >
                Alert
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="example3"
                onClick={() => setActiveExample("example3")}
                style={
                  activeExample === "example3"
                    ? { ...navLinkStyles, ...activeNavLinkStyles }
                    : navLinkStyles
                }
              >
                Dropdown
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="example4"
                onClick={() => setActiveExample("example4")}
                style={
                  activeExample === "example4"
                    ? { ...navLinkStyles, ...activeNavLinkStyles }
                    : navLinkStyles
                }
              >
                Modal
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="example5"
                onClick={() => setActiveExample("example5")}
                style={
                  activeExample === "example5"
                    ? { ...navLinkStyles, ...activeNavLinkStyles }
                    : navLinkStyles
                }
              >
                Radio Button
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <h2 style={{ color: "#01AA85" }}>Event Handling Demo</h2>
          <div style={contentStyles}>{renderContent()}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;