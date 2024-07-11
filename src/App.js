import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import RestaurantManagementPage from './components/RestaurantManagementPage';
import AddRestaurantPage from './components/AddRestaurantPage';
import EditRestaurantPage from './components/EditRestaurantPage';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<RestaurantManagementPage />} />
            <Route path="/add" element={<AddRestaurantPage />} />
            <Route path="/edit/:id" element={<EditRestaurantPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
