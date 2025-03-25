import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLogout = () => {
    setUser(null);
    setCart([]); // Xóa giỏ hàng khi đăng xuất
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Router>
      {user && <Navigation onLogout={handleLogout} user={user} cart={cart} />}
      <Routes>
        {/* Nếu đã đăng nhập, điều hướng đến Home, nếu không, điều hướng đến Login */}
        <Route path="/" element={user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/character" element={<Character />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} user={user} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/add-product" element={user ? <AddProduct user={user} /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
