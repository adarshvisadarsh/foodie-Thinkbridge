import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Updated to import named export 'thunk'
import restaurantReducer from './reducers/restaurantReducer';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
