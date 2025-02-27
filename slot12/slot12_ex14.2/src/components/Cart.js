import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { ListGroup, Button, Alert } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const totalValue = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      setIsPaymentSuccess(true);
      clearCart();
      setTimeout(() => setIsPaymentSuccess(false), 3000);
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? <p className="text-center">Cart is empty</p> : (
        <ListGroup className="mb-3">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between">
              {item.name} - ${item.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <p>Total: ${totalValue.toFixed(2)}</p>
      <Button variant="warning" onClick={clearCart} className="me-2">Clear Cart</Button>
      <Button variant="success" onClick={handleConfirmOrder}>Confirm Order</Button>

      {isPaymentSuccess && <Alert variant="success" className="mt-3">Order success! Thank you for your purchase.</Alert>}
    </div>
  );
};

export default Cart;