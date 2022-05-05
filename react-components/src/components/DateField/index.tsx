import { validationBirthday } from '../../utils/validation';

import Label from '../Label';

import './styles.scss';

import IProps from './types';

const DateField = ({ label, name, register, textError }: IProps) => {
  return (
    <div className="datefield">
      <Label>
        {label}
        <input
          {...register(name, {
            validate: (value) => validationBirthday(value as string),
          })}
          className="datefield__input"
          type="date"
        />
      </Label>

      {textError && <div className="datefield__validation">{textError}</div>}
    </div>
  );
};

export default DateField;
