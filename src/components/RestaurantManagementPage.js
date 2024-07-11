import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants, setSearchQuery } from '../redux/actions/restaurantActions';
import RestaurantList from '../components/RestaurantList';
import RestaurantSearch from '../components/RestaurantSearch';

const RestaurantManagementPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const searchQuery = useSelector((state) => state.restaurants.searchQuery);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Restaurant Management</h1>
      <RestaurantSearch />
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default RestaurantManagementPage;
