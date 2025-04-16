import React from 'react';
import { Link } from 'react-router-dom';
import pantherLogo from '../images/panther_logo.png'; // Import the logo correctly

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          {/* Use imported logo */}
          <img 
            src={pantherLogo} 
            alt="Panther Plate Logo"
            className="logo-image"
          />
          <div className="logo-text">
            <h1>Panther Plate</h1>
            <p>Your Campus Dining Solution</p>
          </div>
        </Link>
        <nav>
          <Link to="/cart" className="nav-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;