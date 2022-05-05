import { RefObject, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useAppSelector } from '../../hooks/redux';

import './styles.scss';

const SearchBar = ({ refSearch }: { refSearch: RefObject<HTMLInputElement> }) => {
  const { search } = useAppSelector((state) => state.mainReducer);

  const handleBlur = () => {
    if (search !== (refSearch.current as HTMLInputElement).value) {
      (refSearch.current as HTMLInputElement).value = search;
    }
  };

  useEffect(() => {
    (refSearch.current as HTMLInputElement).value = search;
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
