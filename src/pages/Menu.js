// src/pages/Menu.js
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import WaitTimeGraph from '../components/WaitTimeGraph';
import { restaurants } from '../data/restaurants';
import { CartContext } from '../contexts/CartContext';

const Menu = () => {
  const { restaurantId } = useParams();
  const { cart, restaurantId: cartRestaurantId, addToCart } = useContext(CartContext);
  
  const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
  
  // Mock wait time data - in a real app, this would come from an API
  const [waitTimes, setWaitTimes] = useState({
    current: Math.floor(Math.random() * 20) + 10, // Random between 10-30
    average: Math.floor(Math.random() * 15) + 15, // Random between 15-30
    history: Array(6).fill().map(() => Math.floor(Math.random() * 25) + 5), // Last 6 days
    peakHours: {
      'Monday': ['11:30 AM', '12:30 PM'],
      'Tuesday': ['11:45 AM', '1:00 PM'],
      'Wednesday': ['12:00 PM', '1:15 PM'],
      'Thursday': ['11:15 AM', '12:45 PM'],
      'Friday': ['11:00 AM', '12:00 PM']
    }
  });

  if (!restaurant) return <div>Restaurant not found</div>;

  const cartItemsFromThisRestaurant = cart.filter(
    item => item.restaurantId === parseInt(restaurantId)
  ).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="menu-page">
      <div className="restaurant-header">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.cuisine} • ⭐ {restaurant.rating} • ⏱ {restaurant.deliveryTime}</p>
        
        {/* Wait Time Graph Component */}
        <WaitTimeGraph waitTimes={waitTimes} />
      </div>
      
      <div className="menu-items">
        {restaurant.menu && restaurant.menu.map(item => (
          <MenuItem 
            key={item.id} 
            item={item}
            onAddToCart={(item, quantity) => addToCart(
              { ...item, quantity },
              parseInt(restaurantId)
            )}
          />
        ))}
      </div>
      
      {cartItemsFromThisRestaurant > 0 && (
        <Link to="/cart" className="view-cart-button btn-primary">
          View Cart ({cartItemsFromThisRestaurant})
        </Link>
      )}
    </div>
  );
};

export default Menu;