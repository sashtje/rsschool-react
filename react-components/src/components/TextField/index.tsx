import {
  validationNameAndSurname,
  validationEmail,
  validationZipcode,
} from '../../utils/validation';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const TextField = ({ label, name, register, textError, autofocus }: IProps) => {
  const returnValidationCallback = (value: string) => {
    switch (name) {
      case 'name':
      case 'surname':
        return validationNameAndSurname(value);

      case 'email':
        return validationEmail(value);

      case 'zipcode':
        return validationZipcode(value);
    }
  };

  return (
    <div className="textfield">
      <Label>
        {label}
        <input
          {...register(name, {
            validate: (value) => returnValidationCallback(value as string),
          })}
          className="textfield__input"
          type="text"
          autoFocus={autofocus ? true : false}
        />
      </Label>

      {textError && <div className="textfield__validation">{textError}</div>}
    </div>
  );
};

export default TextField;
