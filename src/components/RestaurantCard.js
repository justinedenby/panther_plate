import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="restaurant-card" ref={imgRef}>
      <div className="restaurant-image-container">
        {isVisible && (
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className={`restaurant-image ${imageLoaded ? 'loaded' : ''}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-restaurant.webp";
            }}
          />
        )}
        <div className="image-placeholder" style={{ 
          backgroundColor: '#00236620', // Light blue with opacity
          display: imageLoaded ? 'none' : 'block'
        }} />
      </div>
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <div className="restaurant-meta">
          <span>⏱ {restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;