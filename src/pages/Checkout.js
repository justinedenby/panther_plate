import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    location: 'Dormitory A',
    paymentMethod: 'Student Dining Dollars',
    instructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order here (would connect to backend in real app)
    localStorage.removeItem('pantherPlateCart');
    navigate('/order-confirmation'); // You'd need to create this page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Delivery Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="Dormitory A">Dormitory A</option>
            <option value="Dormitory B">Dormitory B</option>
            <option value="Library">Library</option>
            <option value="Student Center">Student Center</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="Student Dining Dollars">Student Dining Dollars</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Mobile Payment">Mobile Payment</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Special Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Any special requests?"
          />
        </div>
        
        <button type="submit" className="place-order-button btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;