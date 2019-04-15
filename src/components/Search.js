import React from 'react';

const Search = (props) => {

  const handleChange = (e) => {
     props.searchTerm = e.target.value
  }
  console.log(props)
  return (
    <div className="filter">
      <input
        onChange={handleChange}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
