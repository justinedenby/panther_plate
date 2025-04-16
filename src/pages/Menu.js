import React, { useState } from 'react';  // Add useState import
import { useParams, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { restaurants } from '../data/restaurants';

const Menu = () => {
  const { restaurantId } = useParams();
  const [cart, setCart] = useState([]);
  
  const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
  
  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="menu-page">
      <h2>{restaurant.name}</h2>
      <div className="menu-items">
        {restaurant.menu.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
      {cart.length > 0 && (
        <Link to="/cart" className="view-cart-button">
          View Cart ({cart.length})
        </Link>
      )}
    </div>
  );
};

export default Menu;  // Add this export