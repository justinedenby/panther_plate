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

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  const getImageSrc = () => {
    try {
      // Handle both full paths and just filenames
      const filename = restaurant.image.includes('/') 
        ? restaurant.image.split('/').pop()
        : restaurant.image;
      return `/images/restaurants/${filename}`;
    } catch {
      return '/images/default-restaurant.webp';
    }
  };

  return (
    <Link to={`/menu/${restaurant.id}`} className="restaurant-link">
      <div className="restaurant-card" ref={imgRef}>
        <div className="restaurant-image-container">
          {isVisible && (
            <img 
              src={getImageSrc()}
              alt={restaurant.name}
              className={`restaurant-image ${imageLoaded ? 'loaded' : ''}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/default-restaurant.webp';
              }}
            />
          )}
          <div className="image-placeholder" />
        </div>
        <div className="restaurant-info">
          <h3>{restaurant.name}</h3>
          <div className="restaurant-meta">
            <span>⏱ {restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;