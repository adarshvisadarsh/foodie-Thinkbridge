import * as types from './actionTypes';
import mockApiService from '../../services/mockApiService';

export const fetchRestaurants = () => async (dispatch) => {
  try {
    const restaurants = await mockApiService.fetchRestaurants();
    dispatch({ type: types.FETCH_RESTAURANTS_SUCCESS, payload: restaurants });
  } catch (error) {
    dispatch({ type: types.SET_ERROR, payload: 'Error fetching restaurants' });
  }
};

export const addRestaurant = (restaurantData) => async (dispatch) => {
  try {
    const newRestaurant = await mockApiService.addRestaurant(restaurantData);
    dispatch({ type: types.ADD_RESTAURANT_SUCCESS, payload: newRestaurant });
  } catch (error) {
    dispatch({ type: types.SET_ERROR, payload: 'Error adding restaurant' });
  }
};

export const updateRestaurant = (restaurantData) => async (dispatch) => {
  try {
    const updatedRestaurant = await mockApiService.updateRestaurant(restaurantData);
    dispatch({ type: types.UPDATE_RESTAURANT_SUCCESS, payload: updatedRestaurant });
  } catch (error) {
    dispatch({ type: types.SET_ERROR, payload: 'Error updating restaurant' });
  }
};

export const deleteRestaurant = (restaurantId) => async (dispatch) => {
  try {
    await mockApiService.deleteRestaurant(restaurantId);
    dispatch({ type: types.DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
  } catch (error) {
    dispatch({ type: types.SET_ERROR, payload: 'Error deleting restaurant' });
  }
};

export const setSearchQuery = (query) => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});
