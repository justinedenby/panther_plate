// src/components/MenuItem.js
import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="menu-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-meta">
          <span className="item-price">${item.price.toFixed(2)}</span>
          {item.calories && <span className="item-calories">{item.calories} cal</span>}
          {item.isVegetarian && <span className="vegetarian-badge">Vegetarian</span>}
        </div>
      </div>
      <div className="item-controls">
        <div className="quantity-selector">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="quantity-btn"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;