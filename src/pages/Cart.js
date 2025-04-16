import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('pantherPlateCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = newQuantity < 1 
      ? cartItems.filter(item => item.id !== id)
      : cartItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
    
    setCartItems(updatedCart);
    localStorage.setItem('pantherPlateCart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-page">
      <h2>Your Order</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="btn-primary">Browse Restaurants</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={`${item.id}-${item.restaurantId}`} 
                item={item} 
                onUpdateQuantity={updateQuantity} 
              />
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
            <Link to="/checkout" className="checkout-button btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;