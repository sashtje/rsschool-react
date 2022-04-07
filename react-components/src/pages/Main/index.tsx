import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';
import Loader from '../../components/Loader';

import './styles.scss';

import { IState } from './types';

class Main extends Component<Record<string, never>, IState> {
  state = { search: '', isLoading: false, textError: 'dfdfdd', data: [] };

  loadServerData = async (searchStr: string) => {
    this.setState({ isLoading: true }, () =>
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000)
    );

    /* try {
    } catch (e) {} */
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { search } = this.state;
    this.loadServerData(search);
  };

  changeSearch = (searchStr: string, loadData = false) => {
    this.setState({ search: searchStr });

    if (loadData) {
      this.loadServerData(searchStr);
    }
  };

  render() {
    const { search, isLoading, textError, data } = this.state;

    return (
      <main className="home">
        <div className="home__container">
          <form action="" className="home__form" onSubmit={this.handleSubmit}>
            <SearchBar search={search} setSearch={this.changeSearch} />
          </form>

          {isLoading ? (
            <Loader />
          ) : textError !== '' ? (
            <div>{textError}</div>
          ) : (
            <CardList data={data} />
          )}
        </div>
      </main>
    );
  }
}

export default Main;
