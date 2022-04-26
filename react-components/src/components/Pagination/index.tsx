import { useContext, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import { AppContext } from '../../context';

import './styles.scss';

const Pagination = () => {
  const { state, dispatch } = useContext(AppContext);
  const [page, setPage] = useState<string>(state.main.currentPage);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const valueNumber = +value;
    if (valueNumber >= 0 && valueNumber <= +state.main.totalPages) {
      setPage(valueNumber.toString());
    }
  };

  const handleBlur = () => {
    setIsEdit(false);
    if (page !== state.main.currentPage && page !== '0') {
      updateCurrentPage(page);
    }
  };

  const handleClick = () => {
    setPage(state.main.currentPage);
    setIsEdit(true);
  };

  const updateCurrentPage = (value: string) => {
    dispatch({ type: 'change-current-page', payload: { currentPage: value } });
    dispatch({ type: 'clear-main-cards' });
  };

  const handleBtnPrev = () => {
    const value = +state.main.currentPage - 1;
    updateCurrentPage(value.toString());
  };

  const handleBtnNext = () => {
    const value = +state.main.currentPage + 1;
    updateCurrentPage(value.toString());
  };

  return (
    <div className="pagination">
      <button
        className="pagination__prev-btn"
        disabled={state.main.currentPage === '1'}
        onClick={handleBtnPrev}
      >
        <BsFillCaretLeftFill />
      </button>

      {isEdit ? (
        <input
          className="pagination__input"
          type="text"
          value={page}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span className="pagination__current-page" onClick={handleClick}>
          {state.main.currentPage}
        </span>
      )}

      <span>/</span>

      <span>{state.main.totalPages}</span>

      <button
        className="pagination__next-btn"
        disabled={state.main.currentPage === state.main.totalPages}
        onClick={handleBtnNext}
      >
        <BsFillCaretRightFill />
      </button>
    </div>
  );
};

export default Pagination;
