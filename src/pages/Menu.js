// src/pages/Menu.js (updated)
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import WaitTimeGraph from '../components/WaitTimeGraph';
import QueueStatus from '../components/QueueStatus';
import { restaurants } from '../data/restaurants';
import { useCart } from '../contexts/CartContext';


const Menu = () => {
  const { restaurantId } = useParams();
  const { cart, restaurantId: cartRestaurantId, addToCart } = useCart();
      
  const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
  
  const [waitTimes, setWaitTimes] = useState({
    current: Math.floor(Math.random() * 20) + 10,
    average: Math.floor(Math.random() * 15) + 15,
    history: Array(6).fill().map(() => Math.floor(Math.random() * 25) + 5),
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{restaurant.name}</h2>
        <p className="text-gray-600 mb-4">
          {restaurant.cuisine} • ⭐ {restaurant.rating} • ⏱ {restaurant.deliveryTime}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <WaitTimeGraph waitTimes={waitTimes} />
          <QueueStatus />
        </div>
      </div>
      
      <div className="menu-items space-y-4">
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
        <Link 
          to="/cart" 
          className="view-cart-button btn-primary fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg animate-bounce"
        >
          <span className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartItemsFromThisRestaurant}
            </span>
            🛒
          </span>
        </Link>
      )}
    </div>
  );
};

export default Menu;