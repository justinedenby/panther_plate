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
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(
        cartItem => cartItem.id === item.id && cartItem.restaurantId === restaurant.id
      );
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      
      // Add new item to cart
      return [...prevCart, { 
        ...item,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name
      }];
    });
  };

  return (
    <div className="menu-page">
      <div className="restaurant-header">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.cuisine} • ⭐ {restaurant.rating} • ⏱ {restaurant.deliveryTime}</p>
      </div>
      
      <div className="menu-items">
        {restaurant.menu.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            addToCart={addToCart}  // Make sure to pass the function
          />
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