import { Validate } from 'react-hook-form';
import {
  validationNameAndSurname,
  validationEmail,
  validationZipcode,
} from '../../utils/validation';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const TextField = ({ label, name, register, textError, autofocus }: IProps) => {
  const returnValidationCallback = () => {
    switch (name) {
      case 'name':
      case 'surname':
        return validationNameAndSurname;

      case 'email':
        return validationEmail;

      case 'zipcode':
        return validationZipcode;

      default:
        return true;
    }
  };

  return (
    <div className="textfield">
      <Label>
        {label}
        <input
          {...register(name, {
            validate: returnValidationCallback() as
              | Validate<string | number | boolean | FileList | ((index: number) => File | null)>
              | Record<
                  string,
                  Validate<string | number | boolean | FileList | ((index: number) => File | null)>
                >
              | undefined,
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
