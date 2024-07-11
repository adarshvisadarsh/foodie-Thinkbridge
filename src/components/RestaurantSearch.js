import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions/restaurantActions';

const RestaurantSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search Restaurants" onChange={handleSearch} />
    </div>
  );
};

export default RestaurantSearch;
