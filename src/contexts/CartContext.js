// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { showNotification } = useContext(NotificationContext);
  const [cart, setCart] = useState([]);
  const [restaurantId, setRestaurantId] = useState(null);

  const addToCart = (item, restaurantId) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => 
        cartItem.id === item.id && cartItem.restaurantId === restaurantId
      );
      
      if (existingItem) {
        showNotification(`${item.name} quantity updated in cart`, 'info');
        return prev.map(cartItem =>
          cartItem.id === item.id && cartItem.restaurantId === restaurantId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        showNotification(`${item.name} added to cart`, 'success');
        return [...prev, { ...item, restaurantId }];
      }
    });
    
    setRestaurantId(restaurantId);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(prev => {
      const item = prev.find(i => i.id === itemId);
      if (item) {
        showNotification(`${item.name} removed from cart`, 'info');
      }
      return prev.filter(item => item.id !== itemId);
    });
  };

  const clearCart = () => {
    showNotification('Cart cleared', 'info');
    setCart([]);
    setRestaurantId(null);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        restaurantId,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);