import React, { useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pokemon from "./pages/Pokemon";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Gameplay from "./pages/Gameplay";
import Shop from "./pages/Shop";
import AddProduct from "./pages/AddProduct";

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return []; // Trả về mảng rỗng nếu parse thất bại
    }
  });

  useEffect(() => {
    console.log("Cart state updated:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLogout = () => {
    setUser(null);
    setCart([]); // Đảm bảo cart là mảng rỗng, không phải undefined
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    if (localStorage.getItem("user")) {
      console.error("Failed to clear localStorage. Forcing clear...");
      localStorage.clear();
    }
  };

  const handleLogin = (user) => {
    console.log("User logged in:", user);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
      <Router>

        {user && <Navigation onLogout={handleLogout} user={user} cart={cart} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/character" element={<Character />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} user={user} />} />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} user={user} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/add-product"
            element={<AddProduct user={user} />}
          />{" "}
          {/* Thêm route */}
        </Routes>
      </Router>
  );
};

export default App;
