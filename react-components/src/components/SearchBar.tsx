import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

interface IState {
  search: string;
}

interface Props {
  search: string;
  setSearch: (searchStr: string) => void;
}

class SearchBar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

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

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar__icon">
          <FcSearch />
        </div>
        <input
          className="searchbar__input"
          autoFocus
          type="text"
          value={this.props.search}
          onChange={(e) => {
            this.props.setSearch(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
