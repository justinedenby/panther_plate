// src/components/MenuItem.js (updated)
import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
  };

  return (
    <div className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
            
            <div className="flex items-center mt-2 space-x-3">
              <span className="text-lg font-bold text-blue-800">
                ${item.price.toFixed(2)}
              </span>
              
              {item.calories && (
                <span className="text-sm text-gray-500">
                  {item.calories} cal
                </span>
              )}
              
              {item.isVegetarian && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Vegetarian
                </span>
              )}
            </div>
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <div className="h-24 w-24 bg-gray-200 rounded-md overflow-hidden">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="quantity-selector flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="quantity-btn bg-gray-100 hover:bg-gray-200 px-3 py-1 transition-colors"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity px-4 font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="quantity-btn bg-gray-100 hover:bg-gray-200 px-3 py-1 transition-colors"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-btn bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors flex items-center"
          >
            <span className="mr-2">Add</span>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;