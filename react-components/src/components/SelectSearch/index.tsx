import { useContext } from 'react';

import Label from '../Label';
import { AppContext } from '../../context';

import './styles.scss';

import { IProps } from './types';

const SelectSearch = ({ label, options, name }: IProps) => {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;

    dispatch({ type: 'change-sort', payload: { sort: value } });
    dispatch({ type: 'clear-main-cards' });
  };

  return (
    <div className="selectfield">
      <Label>
        {label}
        <select
          value={state.main.sort}
          onChange={handleChange}
          className="selectfield__select"
          name={name}
        >
          {options.map(({ value, text }) => (
            <option value={value} key={value}>
              {text}
            </option>
          ))}
        </select>
      </Label>
    </div>
  );
};

export default SelectSearch;
