import React from 'react';

const Search = (props) => {

  const handleChange = (e) => {
   return props.searchTerm(e.target.value)
  }

  return (
    <div className="filter">
      <input
        onChange={handleChange}
        id="search-bar"
        type="text"
        placeholder="Search Notes by Title"
      />
    </div>
  );
}

export default Search;
