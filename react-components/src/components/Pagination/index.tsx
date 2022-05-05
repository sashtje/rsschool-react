import { useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { setCurrentPage, clearCards } from '../../store/reducers/mainSlice';

import './styles.scss';

const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<string>(currentPage);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const valueNumber = +value;
    if (valueNumber >= 0 && valueNumber <= +totalPages) {
      setPage(valueNumber.toString());
    }
  };

  const handleBlur = () => {
    setIsEdit(false);
    if (page !== currentPage && page !== '0') {
      updateCurrentPage(page);
    }
  };

  const handleClick = () => {
    setPage(currentPage);
    setIsEdit(true);
  };

  const updateCurrentPage = (value: string) => {
    dispatch(setCurrentPage(value));
    dispatch(clearCards());
  };

  const handleBtnPrev = () => {
    const value = +currentPage - 1;
    updateCurrentPage(value.toString());
  };

  const handleBtnNext = () => {
    const value = +currentPage + 1;
    updateCurrentPage(value.toString());
  };

  return (
    <div className="pagination">
      <button
        className="pagination__prev-btn"
        disabled={currentPage === '1'}
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
          {currentPage}
        </span>
      )}

      <span>/</span>

      <span>{totalPages}</span>

      <button
        className="pagination__next-btn"
        disabled={currentPage === totalPages}
        onClick={handleBtnNext}
      >
        <BsFillCaretRightFill />
      </button>
    </div>
  );
};

export default Pagination;
