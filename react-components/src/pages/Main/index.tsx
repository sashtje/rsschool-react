import React, { Component } from 'react';
import { getDefaultPhotos, getPhotosByText } from '../../utils/flickrApi';

import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';
import Loader from '../../components/Loader';

import './styles.scss';

import { IState, IPhotosData } from './types';

class Main extends Component<Record<string, never>, IState> {
  state = { search: '', isLoading: false, textError: '', data: [] };

  loadServerData = async (searchStr: string) => {
    this.setState({ isLoading: true });

    let photosData: IPhotosData;

    if (searchStr === '') {
      photosData = await getDefaultPhotos();
    } else {
      photosData = await getPhotosByText(searchStr);
    }

    this.setState({ isLoading: false, ...photosData });
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
            <div className="home__error">{textError}</div>
          ) : (
            <CardList data={data} />
          )}
        </div>
      </main>
    );
  }
}

export default Main;
