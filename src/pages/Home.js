import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import { locations } from '../data/restaurants';

const Home = () => {
  return (
    <div className="home">
      {Object.entries(locations).map(([locationName, locationRestaurants]) => (
        <div key={locationName} className="location-group">
          <h2 className="location-header">{locationName}</h2>
          <div className="restaurant-list">
            {locationRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;  // Add this export