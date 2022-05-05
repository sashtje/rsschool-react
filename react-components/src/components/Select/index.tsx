import { validationCountry } from '../../utils/validation';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const Select = ({ label, register, options, textError, name }: IProps) => {
  return (
    <div className="selectfield">
      <Label>
        {label}
        <select
          {...register(name, {
            validate: (value) => validationCountry(value as string),
          })}
          className="selectfield__select"
          defaultValue=""
        >
          <option key={-1} disabled></option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </Label>

      {textError && <div className="selectfield__validation">{textError}</div>}
    </div>
  );
};

export default Select;
