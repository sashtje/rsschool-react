import { useContext, useState } from 'react';
import { getDefaultPhotos, getPhotosByText } from '../../utils/flickrApi';

import CardList from '../../components/CardList';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import FormSearch from '../../components/FormSearch';
import { AppContext } from '../../context';

import './styles.scss';

import { IPhotosData } from './types';

const Main = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState('');

  const loadServerData = async () => {
    setIsLoading(true);

    let photosData: IPhotosData;
    const { search, sort, cardsPerPage, currentPage } = state.main;

    if (search === '') {
      photosData = await getDefaultPhotos(sort, cardsPerPage, currentPage);
    } else {
      photosData = await getPhotosByText(search, sort, cardsPerPage, currentPage);
    }

    const { data, textError, totalPages } = photosData;

    textError
      ? setTextError(textError)
      : dispatch({ type: 'load-main-cards', payload: { cards: data, totalPages } });
    setIsLoading(false);
  };

  return (
    <main className="home">
      <div className="home__container">
        <FormSearch loadServerData={loadServerData} />

        {isLoading ? (
          <Loader />
        ) : textError !== '' ? (
          <div className="home__error">{textError}</div>
        ) : (
          <>
            <CardList className="home__cards" data={state.main.cards} />

            <Pagination />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
