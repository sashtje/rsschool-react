import { Component } from 'react';

import SearchBar from '../../components/SearchBar';
import Cards from '../../components/CardList';

import './styles.scss';

import { IState } from './types';

class Main extends Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { search: '' };
  }

  changeSearch(searchStr: string) {
    this.setState({ search: searchStr });
  }

  render() {
    const { search } = this.state;

    return (
      <main className="home">
        <div className="home__container">
          <SearchBar
            search={search}
            setSearch={(searchStr: string) => {
              this.changeSearch(searchStr);
            }}
          />
          <Cards className="home__cards" search={search} />
        </div>
      </main>
    );
  }
}

export default Main;
