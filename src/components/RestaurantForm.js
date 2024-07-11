import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRestaurant, updateRestaurant } from '../redux/actions/restaurantActions';

const RestaurantForm = ({ restaurant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name);
      setDescription(restaurant.description);
      setLocation(restaurant.location);
    }
  }, [restaurant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !location) {
      setError('All fields are required.');
      return;
    }
    if (restaurant) {
      dispatch(updateRestaurant({ id: restaurant.id, name, description, location }));
    } else {
      dispatch(addRestaurant({ name, description, location }));
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">{restaurant ? 'Update' : 'Add'} Restaurant</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RestaurantForm;
