import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const Select = ({ label, selectRef, options, textError, name, handleChangeInput }: IProps) => {
  return (
    <div className="selectfield">
      <Label>
        {label}
        <select
          className="selectfield__select"
          defaultValue=""
          ref={selectRef}
          onChange={() => handleChangeInput(`${name}Error`, textError)}
        >
          <option key={-1} disabled></option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </Label>

      {textError !== '' && <div className="selectfield__validation">{textError}</div>}
    </div>
  );
};

export default Select;
