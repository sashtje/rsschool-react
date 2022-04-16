import React, { useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';

import './styles.scss';

import { IProps } from './types';

const SearchBar = ({ search, changeSearch }: IProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    changeSearch((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    let searchQuery = '';

    if (localStorage.getItem('searchbar') as string) {
      searchQuery = localStorage.getItem('searchbar') as string;
    }

    changeSearch(searchQuery, true);
  }, []);

  useEffect(() => {
    return localStorage.setItem('searchbar', search);
  }, [search]);

  return (
    <div className="searchbar">
      <div className="searchbar__icon">
        <FcSearch />
      </div>
      <input
        className="searchbar__input"
        autoFocus
        type="search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
