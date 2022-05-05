import CardList from '../../components/CardList';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import FormSearch from '../../components/FormSearch';

import './styles.scss';

import { useAppSelector } from '../../hooks/redux';

const Main = () => {
  const { cards, isLoading, error } = useAppSelector((state) => state.mainReducer);

  return (
    <main className="home">
      <div className="home__container">
        <FormSearch />

        {isLoading ? (
          <Loader />
        ) : error !== '' ? (
          <div className="home__error">{error}</div>
        ) : (
          <>
            <CardList className="home__cards" data={cards} />

            <Pagination />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
