import { RefObject, useContext, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';

import { AppContext } from '../../context';

import './styles.scss';

const SearchBar = ({ refSearch }: { refSearch: RefObject<HTMLInputElement> }) => {
  const { state } = useContext(AppContext);

  const handleBlur = () => {
    if (state.main.search !== (refSearch.current as HTMLInputElement).value) {
      (refSearch.current as HTMLInputElement).value = state.main.search;
    }
  };

  useEffect(() => {
    (refSearch.current as HTMLInputElement).value = state.main.search;
  }, []);

  return (
    <div className="searchbar">
      <div className="searchbar__icon">
        <FcSearch />
      </div>
      <input
        className="searchbar__input"
        autoFocus
        type="search"
        name="search"
        ref={refSearch}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchBar;
