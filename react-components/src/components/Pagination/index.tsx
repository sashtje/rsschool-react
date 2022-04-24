import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import './styles.scss';

const Pagination = () => {
  const total = 500;
  const isEdit = false;

  return (
    <div className="pagination">
      <button className="pagination__prev-btn">
        <BsFillCaretLeftFill />
      </button>
      {isEdit ? <input type="text" /> : <span></span>}
      <span>/</span>
      <span>{total}</span>
      <button className="pagination__next-btn">
        <BsFillCaretRightFill />
      </button>
    </div>
  );
};

export default Pagination;
