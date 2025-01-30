import React, { useState } from 'react';
import { FaHome, FaHeart, FaInfoCircle, FaSearch } from 'react-icons/fa';
import '../style/Navbar.css';

const Navbar = ({ onSearch }) => {
 const [searchTerm, setSearchTerm] = useState(''); 
 const [query, setQuery] = useState('burger');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Handle the actual search when user submits the search form
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    setQuery(searchTerm); // Update query with search term
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__icon">
          <FaHome size={24} />
          <span>Home</span>
        </div>
        <div className="navbar__icon">
          <FaHeart size={24} />
          <span>Favorites</span>
        </div>
        <div className="navbar__icon">
          <FaInfoCircle size={24} />
          <span>About</span>
        </div>
      </div>
      <div className="navbar__right">
        <form onSubmit={handleSearch} className="navbar__search">
          <input
            type="text"
            className="navbar__search-input"
            value={searchTerm}
            onChange={handleSearchInput}
            placeholder="Search for a recipe"
          />
          <button type="submit" className="navbar__search-button">
            <FaSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
