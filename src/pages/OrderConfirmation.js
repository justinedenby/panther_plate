// src/pages/OrderConfirmation.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const orderDetails = state?.orderDetails || {};

  return (
    <div className="order-confirmation p-4 max-w-2xl mx-auto text-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">Thank you for your order</p>
        
        <div className="order-details bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="font-semibold mb-3">Order Details</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm text-gray-600">Order Number:</p>
              <p className="font-medium">#{orderDetails.orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Wait:</p>
              <p className="font-medium">{orderDetails.estimatedWait} minutes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm text-gray-600">Delivery To:</p>
              <p className="font-medium">{orderDetails.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Method:</p>
              <p className="font-medium">{orderDetails.paymentMethod}</p>
            </div>
          </div>
          
          {orderDetails.instructions && (
            <div className="mb-3">
              <p className="text-sm text-gray-600">Special Instructions:</p>
              <p className="font-medium">{orderDetails.instructions}</p>
            </div>
          )}
        </div>
        
        <Link 
          to="/" 
          className="btn-primary inline-block px-6 py-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;