import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="menu-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
      <button 
        className="btn-secondary"
        onClick={() => onAddToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;