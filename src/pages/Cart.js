import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pantherPlateCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('pantherPlateCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = newQuantity < 1 
      ? cartItems.filter(item => item.id !== id)
      : cartItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate order totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07;
  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Panther Plate Order</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="btn-primary">
            <span className="icon">🍔</span> Browse Restaurants
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={`${item.id}-${item.restaurantId}`}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>
          
          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <p className="delivery-time">
            <span className="icon">⏱</span> Estimated delivery: 20-30 min
          </p>

          <Link to="/checkout" className="checkout-btn btn-primary">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;