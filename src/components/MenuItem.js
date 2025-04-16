import React, { useState } from 'react';

const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Verify addToCart exists before calling it
    if (typeof addToCart === 'function') {
      addToCart({
        ...item,
        quantity: quantity
      });
      setQuantity(1); // Reset quantity after adding to cart
    } else {
      console.error('addToCart is not a function');
    }
  };

  return (
    <div className="menu-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="item-controls">
        <div className="quantity-selector">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="quantity-btn"
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