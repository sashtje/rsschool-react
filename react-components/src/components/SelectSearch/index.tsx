import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const SelectSearch = ({ label, options, name }: IProps) => {
  return (
    <div className="selectfield">
      <Label>
        {label}
        <select className="selectfield__select" name={name}>
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
