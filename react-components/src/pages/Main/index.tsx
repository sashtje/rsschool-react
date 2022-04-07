import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';

import './styles.scss';

import { IState } from './types';

class Main extends Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { search: '' };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  changeSearch(searchStr: string) {
    this.setState({ search: searchStr });
  }

  render() {
    const { search } = this.state;

    return (
      <main className="home">
        <div className="home__container">
          <form action="" className="home__form" onSubmit={this.handleSubmit}>
            <SearchBar
              search={search}
              setSearch={(searchStr: string) => {
                this.changeSearch(searchStr);
              }}
            />
          </form>

          <CardList className="home__cards" search={search} />
        </div>
      </main>
    );
  }
}

export default Main;
