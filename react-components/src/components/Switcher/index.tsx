import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const Switcher = ({ label, name, register }: IProps) => {
  return (
    <Label className="label_is_inline-flex">
      {label}
      <label className="switcher">
        <input {...register(name)} className="switcher__input" type="checkbox" />
        <span className="switcher__track">
          <span className="switcher__slider"></span>
        </span>
      </label>
    </Label>
  );
};

export default Switcher;
