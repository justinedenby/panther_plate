// src/contexts/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurantId, setRestaurantId] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pantherPlateCart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart.items || []);
      setRestaurantId(parsedCart.restaurantId || null);
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('pantherPlateCart', JSON.stringify({
      items: cart,
      restaurantId
    }));
  }, [cart, restaurantId]);

  const addToCart = (item, currentRestaurantId) => {
    setCart(prevCart => {
      // If adding from a different restaurant, clear the cart first
      if (restaurantId && currentRestaurantId !== restaurantId) {
        const confirmChange = window.confirm(
          "You're ordering from a different restaurant. Your current cart will be cleared. Continue?"
        );
        if (!confirmChange) return prevCart;
        
        const newCart = [{ ...item, restaurantId: currentRestaurantId }];
        setRestaurantId(currentRestaurantId);
        return newCart;
      }

      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.id === item.id
      );
      
      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += item.quantity;
        return newCart;
      }
      
      // Add new item to cart
      setRestaurantId(currentRestaurantId);
      return [...prevCart, item];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(prevCart => {
      if (newQuantity < 1) {
        return prevCart.filter(item => item.id !== id);
      }
      return prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setRestaurantId(null);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      restaurantId,
      cartCount,
      cartTotal,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};