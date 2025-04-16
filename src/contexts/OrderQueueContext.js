// src/contexts/OrderQueueContext.js
import React, { createContext, useState, useEffect } from 'react';

export const OrderQueueContext = createContext();

export const OrderQueueProvider = ({ children }) => {
  const [queue, setQueue] = useState({
    currentOrders: 0,
    avgPrepTime: 15, // minutes
    estimatedWait: 0
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, this would fetch from your backend
      const newOrders = Math.floor(Math.random() * 3); // Simulate 0-2 new orders
      const completedOrders = Math.floor(Math.random() * 2); // Simulate 0-1 completed orders
      
      setQueue(prev => {
        const updatedOrders = Math.max(0, prev.currentOrders + newOrders - completedOrders);
        return {
          currentOrders: updatedOrders,
          avgPrepTime: prev.avgPrepTime,
          estimatedWait: updatedOrders * prev.avgPrepTime
        };
      });
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <OrderQueueContext.Provider value={{ queue }}>
      {children}
    </OrderQueueContext.Provider>
  );
};