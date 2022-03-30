import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

interface IState {
  search: string;
}

class Main extends Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { search: '' };
  }

  changeSearch(searchStr: string) {
    this.setState({ search: searchStr });
  }

  render() {
    return (
      <main className="home">
        <div className="home__container">
          <SearchBar
            search={this.state.search}
            setSearch={(searchStr: string) => {
              this.changeSearch(searchStr);
            }}
          />
          <Cards search={this.state.search} />
        </div>
      </main>
    );
  }
}

export default Main;
