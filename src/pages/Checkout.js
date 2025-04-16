// src/pages/Checkout.js (updated)
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderQueueContext } from '../contexts/OrderQueueContext';
import { useCart } from '../contexts/CartContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const { queue } = useContext(OrderQueueContext);
  const { clearCart, cartCount } = useCart();
  const { showNotification } = useContext(NotificationContext);
  
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    location: 'WPU',
    paymentMethod: 'Student Dining Dollars',
    instructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process order
    showNotification('Order placed successfully!', 'success');
    clearCart();
    
    // Navigate to confirmation with order details
    navigate('/order-confirmation', {
      state: {
        orderDetails: {
          ...formData,
          estimatedWait: queue.estimatedWait,
          orderNumber: Math.floor(Math.random() * 1000000)
        }
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (cartCount === 0) {
    return (
      <div className="empty-cart text-center py-10">
        <p className="text-xl mb-4">Your cart is empty</p>
        <Link to="/" className="btn-primary">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      
      <div className="order-status bg-white p-4 rounded-lg shadow-sm mb-6">
        <h3 className="font-semibold mb-2">Your Order Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Orders ahead of you:</p>
            <p className="font-medium">{queue.currentOrders}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Estimated wait time:</p>
            <p className="font-medium">{queue.estimatedWait} minutes</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="checkout-form bg-white p-6 rounded-lg shadow-sm">
        <div className="form-group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="form-group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="form-group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Dormitory A">Dormitory A</option>
            <option value="Dormitory B">Dormitory B</option>
            <option value="Library">Library</option>
            <option value="Student Center">Student Center</option>
          </select>
        </div>
        
        <div className="form-group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Student Dining Dollars">Student Dining Dollars</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Mobile Payment">Mobile Payment</option>
          </select>
        </div>
        
        <div className="form-group mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Any special requests?"
            className="w-full p-2 border border-gray-300 rounded-md h-24"
          />
        </div>
        
        <button 
          type="submit" 
          className="place-order-button btn-primary w-full py-3 text-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;