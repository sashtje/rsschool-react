import { useEffect, useRef } from 'react';

import RadioSearch from '../RadioSearch';
import SearchBar from '../SearchBar';
import SelectSearch from '../SelectSearch';
import { setSearch, clearCards } from '../../store/reducers/mainSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPhotos } from '../../store/reducers/ActionCreators';

import './styles.scss';

import { sort as sortOptions } from '../../model/sort-options';

const FormSearch = () => {
  const dispatch = useAppDispatch();
  const { search, currentPage, totalPages, cardsPerPage, sort, cards } = useAppSelector(
    (state) => state.mainReducer
  );

  const refSearch = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = (refSearch.current as HTMLInputElement).value;

    dispatch(setSearch({ search: value, currentPage: '1' }));
    dispatch(clearCards());
  };

  useEffect(() => {
    const settings = { search, sort, cardsPerPage, currentPage, totalPages };

    localStorage.setItem('searchbar', JSON.stringify(settings));
  }, [search, sort, cardsPerPage, currentPage, totalPages]);

  useEffect(() => {
    if (!cards.length) {
      dispatch(fetchPhotos({ search, sort, cardsPerPage, currentPage }));
    }
  }, [cards]);

  return (
    <form action="" className="home__form search-form" onSubmit={onSubmit}>
      <SearchBar refSearch={refSearch} />

      <div className="search-form__block">
        <SelectSearch label="Sort:" options={sortOptions} name="sort" />

        <RadioSearch label="Per page:" name="perpage" />
      </div>
    </form>
  );
};

export default FormSearch;
