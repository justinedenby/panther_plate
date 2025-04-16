// src/pages/Cart.js (updated)
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../contexts/CartContext';
import { OrderQueueContext } from '../contexts/OrderQueueContext';
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
  } = useCart();
  
  const { queue } = useContext(OrderQueueContext);

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
            <div className="restaurant-info bg-white p-4 rounded-lg shadow-sm mb-4">
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Estimated delivery:</p>
                  <p className="font-medium">{restaurant.deliveryTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Orders ahead of you:</p>
                  <p className="font-medium">{queue.currentOrders}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="cart-items space-y-4">
            {cart.map(item => (
              <CartItem 
                key={`${item.id}-${item.restaurantId}`}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>
          
          <div className="order-summary bg-white p-4 rounded-lg shadow-sm mt-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            
            <div className="summary-row flex justify-between py-2 border-b">
              <span>Subtotal ({cartCount} items):</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row flex justify-between py-2 border-b">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row flex justify-between py-2 border-b">
              <span>Tax (7%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row flex justify-between py-3 font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Estimated wait time: {queue.estimatedWait} minutes</p>
            </div>
          </div>

          <div className="cart-actions flex space-x-4 mt-6">
            <button 
              onClick={clearCart}
              className="btn-secondary flex-1 py-3"
            >
              Clear Cart
            </button>
            <Link 
              to="/checkout" 
              className="checkout-btn btn-primary flex-2 py-3 text-center"
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