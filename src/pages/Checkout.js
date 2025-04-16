import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h2 className="primary-text">Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
        </div>
        
        <div className="form-group">
          <label>Payment Method</label>
          <select className="primary-text">
            <option>Student Dining Dollars</option>
            <option>Credit Card</option>
            <option>Mobile Payment</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Special Instructions</label>
          <textarea 
            className="primary-text"
            placeholder="Any special requests?"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="place-order-button btn-primary"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;