import { useContext, useEffect } from 'react';

import RadioSearch from '../RadioSearch';
import SearchBar from '../SearchBar';
import SelectSearch from '../SelectSearch';
import { AppContext } from '../../context';

import './styles.scss';

import { sort } from '../../model/sort-options';

const FormSearch = ({ loadServerData }: { loadServerData: () => void }) => {
  const { state, dispatch } = useContext(AppContext);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    loadServerData();
  };

  useEffect(() => {
    const { search, sort, cardsPerPage, currentPage, totalPages } = state.main;
    const settings = { search, sort, cardsPerPage, currentPage, totalPages };

    localStorage.setItem('searchbar', JSON.stringify(settings));
  }, [state.main]);

  useEffect(() => {
    if (!state.main.cards.length) {
      console.log('load data');

      loadServerData();
    }
  }, [state.main.cards]);

  return (
    <form action="" className="home__form search-form" onSubmit={onSubmit}>
      <SearchBar />

      <div className="search-form__block">
        <SelectSearch label="Sort:" options={sort} name="sort" />

        <RadioSearch label="Per page:" name="perpage" />
      </div>
    </form>
  );
};

export default FormSearch;
