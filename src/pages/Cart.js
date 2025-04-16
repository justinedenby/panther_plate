// src/pages/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import { restaurants } from '../data/restaurants';

const Cart = () => {
  const { 
    cart, 
    restaurantId, 
    cartCount, 
    cartTotal, 
    updateQuantity, 
    removeItem, 
    clearCart 
  } = useContext(CartContext);

  // Calculate order totals
  const tax = cartTotal * 0.07;
  const deliveryFee = cartTotal > 0 ? 2.99 : 0;
  const total = cartTotal + tax + deliveryFee;

  // Get restaurant info
  const restaurant = restaurants.find(r => r.id === restaurantId);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Panther Plate Order</h2>
      
      {cartCount === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="btn-primary">
            <span className="icon">🍔</span> Browse Restaurants
          </Link>
        </div>
      ) : (
        <>
          {restaurant && (
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>Estimated delivery: {restaurant.deliveryTime}</p>
            </div>
          )}
          
          <div className="cart-items">
            {cart.map(item => (
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
              <span>Subtotal ({cartCount} items):</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (7%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <button 
              onClick={clearCart}
              className="btn-secondary"
            >
              Clear Cart
            </button>
            <Link 
              to="/checkout" 
              className="checkout-btn btn-primary"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;