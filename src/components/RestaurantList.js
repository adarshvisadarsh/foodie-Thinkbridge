import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRestaurant } from '../redux/actions/restaurantActions';
import Pagination from './Pagination';

const RestaurantList = ({ restaurants }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(5);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this restaurant?')) {
      dispatch(deleteRestaurant(id));
    }
  };

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>
      {currentRestaurants.map((restaurant) => (
        <div className="restaurant-item" key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          <p>{restaurant.location}</p>
          <Link to={`/edit/${restaurant.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
        </div>
      ))}
      <Pagination
        restaurantsPerPage={restaurantsPerPage}
        totalRestaurants={restaurants.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RestaurantList;
