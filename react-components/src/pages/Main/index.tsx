import { useState } from 'react';
import { getDefaultPhotos, getPhotosByText } from '../../utils/flickrApi';

import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';
import Loader from '../../components/Loader';

import './styles.scss';

import { IData, IPhotosData } from './types';

const Main = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState('');
  const [data, setData] = useState<IData[]>([]);

  const loadServerData = async (searchStr: string) => {
    setIsLoading(true);

    let photosData: IPhotosData;

    if (searchStr === '') {
      photosData = await getDefaultPhotos();
    } else {
      photosData = await getPhotosByText(searchStr);
    }

    const { data, textError } = photosData;
    setData(data);
    setTextError(textError);
    setIsLoading(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    loadServerData(search);
  };

  const changeSearch = (searchStr: string, loadData = false) => {
    setSearch(searchStr);

    if (loadData) {
      loadServerData(searchStr);
    }
  };

  return (
    <main className="home">
      <div className="home__container">
        <form action="" className="home__form" onSubmit={onSubmit}>
          <SearchBar search={search} changeSearch={changeSearch} />
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
};

export default Main;
