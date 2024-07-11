import React from 'react';
import RestaurantForm from './RestaurantForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditRestaurantPage = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) =>
    state.restaurants.restaurants.find((r) => r.id.toString() === id)
  );

  return (
    <div>
      <h1>Edit Restaurant</h1>
      <RestaurantForm restaurant={restaurant} />
    </div>
  );
};

export default EditRestaurantPage;
