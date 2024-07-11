import * as types from '../actions/actionTypes';

const initialState = {
  restaurants: [],
  searchQuery: '',
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case types.ADD_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      };
    case types.UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) =>
          restaurant.id === action.payload.id ? action.payload : restaurant
        ),
      };
    case types.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: state.restaurants.filter((restaurant) => restaurant.id !== action.payload),
      };
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
