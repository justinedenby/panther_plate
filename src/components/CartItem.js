import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item-card">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="restaurant-name">{item.restaurantName}</p>
      </div>
      
      <div className="item-controls">
        <div className="quantity-selector">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="quantity-btn"
          >
            −
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        
        <div className="price-display">
          <span className="item-price">${item.price.toFixed(2)}</span>
          <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
      
      <button 
        onClick={() => onRemoveItem(item.id)}
        className="remove-btn"
        aria-label="Remove item"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;