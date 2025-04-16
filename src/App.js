// src/App.js (updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Header from './components/Header';
import Footer from './components/Footer';
import { NotificationProvider } from './contexts/NotificationContext';
import { OrderQueueProvider } from './contexts/OrderQueueContext';
import './App.css';

function App() {
  return (
    <NotificationProvider>
      <OrderQueueProvider>
        <CartProvider>
          <Router>
            <div className="app">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu/:restaurantId" element={<Menu />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </OrderQueueProvider>
    </NotificationProvider>
  );
}

export default App;