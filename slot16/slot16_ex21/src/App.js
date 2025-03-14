import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import DishList from './components/DishList';
import DishDetail from './components/DishDetail';
import { users, dishes } from './data';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={NavLink} to="/">
              Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid>
          <Row>
            <Col md={3} lg={2} className="bg-light vh-100 p-3">
              <Nav className="flex-column mt-3">
                <Nav.Link as={NavLink} to="/users" className="mb-2">
                  Bài 1: Users
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dishes" className="mb-2">
                  Bài 2: Dishes
                </Nav.Link>
              </Nav>
            </Col>

            <Col md={9} lg={10} className="p-4">
              <Routes>
                <Route
                  path="/"
                />
                <Route path="/about" element={<h2>About Page</h2>} />
                <Route path="/contact" element={<h2>Contact Page</h2>} />

                <Route path="/users" element={<UserList users={users} />} />
                <Route path="/users/:userId" element={<UserDetail users={users} />} />

                <Route path="/dishes" element={<DishList dishes={dishes} />} />
                <Route path="/dishes/:dishId" element={<DishDetail dishes={dishes} />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;