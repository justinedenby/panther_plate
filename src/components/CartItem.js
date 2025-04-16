import React from 'react';


const CartItem = ({ item, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button 
          className="btn-primary"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          className="btn-primary"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
