import React, { useState } from "react";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const dishes = [
  { id: 0, name: "Uthappizza", price: "4.99", image: "images/uthappizza.jpg", description: "Indian Uthappam and Italian pizza..." },
  { id: 1, name: "Zucchipakoda", price: "1.99", image: "images/Zucchipakoda.jpg", description: "Fried Zucchini with spiced Chickpea..." },
  { id: 2, name: "Vadonut", price: "1.99", image: "images/Vadonut.jpg", description: "Vada or Donut?" },
  { id: 3, name: "ElaiCheese Cake", price: "2.99", image: "images/Elaicheese cake.jpg", description: "New York Style Cheese Cake..." }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <CartProvider>
      <Container fluid className={`${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"} min-vh-100`}> 
        <div className="text-end mb-3">
          <Button variant={isDarkMode ? "light" : "dark"} onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
        <h1 className="text-center mb-4">Restaurant Menu</h1>
        <Form.Control
          type="text"
          placeholder="Search meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <DishesList dishes={filteredDishes} />
        <Cart />
      </Container>
    </CartProvider>
  );
};

export default App;