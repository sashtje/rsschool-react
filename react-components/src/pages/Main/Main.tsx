import { Component } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

import './Main.scss';

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
          <Cards className="home__cards" search={this.state.search} />
        </div>
      </main>
    );
  }
}

export default Main;
