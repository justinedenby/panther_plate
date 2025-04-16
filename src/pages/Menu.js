import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { restaurants } from '../data/restaurants';

const Menu = () => {
  const { restaurantId } = useParams();
  const [cart, setCart] = useState([]);
  
  const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
  
  if (!restaurant) return <div>Restaurant not found</div>;

  const addToCart = (item) => {
    setCart([...cart, { 
      ...item, 
      restaurantId: restaurant.id,
      restaurantName: restaurant.name 
    }]);
  };

  return (
    <div className="menu-page">
      <div className="restaurant-header">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.cuisine} • ⭐ {restaurant.rating} • ⏱ {restaurant.deliveryTime}</p>
      </div>
      
      <div className="menu-items">
        {restaurant.menu.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
      
      {cart.length > 0 && (
        <Link to="/cart" className="view-cart-button btn-primary">
          View Cart ({cart.length})
        </Link>
      )}
    </div>
  );
};

export default Menu;