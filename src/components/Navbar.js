import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/add">Add Restaurant</Link>
      </nav>
    );
  };

export default Navbar;
