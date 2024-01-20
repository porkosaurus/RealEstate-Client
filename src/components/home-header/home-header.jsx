import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './home-header.scss';
import '../../routes/home/home.scss';

const HomeHeader = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() !== '') {
      navigate(`/map/${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value;
    handleSearch(searchQuery);
  };

  return (
    <section className='bg-red'>
      <h1 className='search-heading'>Search All Homes In Los Angeles, CA</h1>
      <div className='search-options-container'>
        <h3 className='search-options'>Buy</h3>
        <h3 className='search-options'>Rent</h3>
        <h3 className='search-options'>Sell</h3>
        <h3 className='search-options'>Agents</h3>
      </div>
      <div className='search-container'>
        <form className='map-form' onSubmit={handleSubmitSearch}>
          <input
            type="text"
            className='search-input'
            name="searchInput"
            placeholder="Search for location to find houses near you..."
          />
          <button type="submit" className='search-button'>
            Search Property
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeHeader;
