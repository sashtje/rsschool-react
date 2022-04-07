import React, { Component, ReactEventHandler } from 'react';
import { FcSearch } from 'react-icons/fc';

import './styles.scss';

import { IProps } from './types';

class SearchBar extends Component<IProps> {
  initSearchBar() {
    if (localStorage.getItem('searchbar') as string) {
      const searchQuery = localStorage.getItem('searchbar') as string;

      this.props.setSearch(searchQuery);
    }
  }

  saveSearchQuery = () => {
    localStorage.setItem('searchbar', this.props.search);
  };

  componentDidMount() {
    this.initSearchBar();
    window.addEventListener('beforeunload', this.saveSearchQuery);
  }

  componentWillUnmount() {
    this.saveSearchQuery();
    window.removeEventListener('beforeunload', this.saveSearchQuery);
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { setSearch } = this.props;

    setSearch((e.target as HTMLInputElement).value);
  };

  render() {
    const { search } = this.props;

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
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
