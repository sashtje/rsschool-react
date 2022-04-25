import React, { useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';

import './styles.scss';

const SearchBar = () => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    /* changeSearch((e.target as HTMLInputElement).value); */
  };

  return (
    <div className="searchbar">
      <div className="searchbar__icon">
        <FcSearch />
      </div>
      <input
        className="searchbar__input"
        autoFocus
        type="search"
        name="search"
        /* value={search}
        onChange={handleChange} */
      />
    </div>
  );
};

export default SearchBar;
