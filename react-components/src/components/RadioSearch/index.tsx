import { useContext } from 'react';

import Label from '../Label';
import { AppContext } from '../../context';

import './styles.scss';

import { IProps } from './types';

import { radioOptions } from '../../model/radio-options';

const RadioSearch = ({ label, name }: IProps) => {
  const { state, dispatch } = useContext(AppContext);
  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;

    dispatch({ type: 'change-per-page', payload: { cardsPerPage: value } });
    dispatch({ type: 'clear-main-cards' });
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
              checked={state.main.cardsPerPage === opt}
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
