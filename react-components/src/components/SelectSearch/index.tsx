import Label from '../Label';
import { setSort, clearCards } from '../../store/reducers/mainSlice';

import './styles.scss';

import { IProps } from './types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const SelectSearch = ({ label, options, name }: IProps) => {
  const { sort } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;

    dispatch(setSort(value));
    dispatch(clearCards());
  };

  return (
    <div className="selectfield">
      <Label>
        {label}
        <select value={sort} onChange={handleChange} className="selectfield__select" name={name}>
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
