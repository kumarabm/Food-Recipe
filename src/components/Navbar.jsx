import React, { useState } from 'react';
import { FaHome, FaHeart, FaInfoCircle, FaSearch } from 'react-icons/fa';
import '../style/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
    setSearchText('');
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
