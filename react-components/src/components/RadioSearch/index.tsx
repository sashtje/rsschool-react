import Label from '../Label';
import { setPerPage, clearCards } from '../../store/reducers/mainSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import './styles.scss';

import { IProps } from './types';

import { radioOptions } from '../../model/radio-options';

const RadioSearch = ({ label, name }: IProps) => {
  const { cardsPerPage } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;

    dispatch(setPerPage({ cardsPerPage: value, currentPage: '1' }));
    dispatch(clearCards());
  };

  return (
    <Label className="label_is_inline-flex">
      {label}
      <div className="radio-block">
        {radioOptions.map((opt) => (
          <label key={opt} className="radio-block__label">
            <input
              className="radio-block__input"
              type="radio"
              name={name}
              value={opt}
              checked={cardsPerPage === opt}
              onChange={handleChange}
            />
            <span className="radio-block__inner">{opt}</span>
          </label>
        ))}
      </div>
    </Label>
  );
};

export default RadioSearch;
