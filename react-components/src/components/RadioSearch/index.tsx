import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const RadioSearch = ({ label, name }: IProps) => {
  return (
    <Label className="label_is_inline-flex">
      {label}
      <div className="radio-block">
        <label className="radio-block__label">
          <input className="radio-block__input" type="radio" name={name} value="20" checked />
          <span className="radio-block__inner">20</span>
        </label>

        <label className="radio-block__label">
          <input className="radio-block__input" type="radio" name={name} value="50" />
          <span className="radio-block__inner">50</span>
        </label>

        <label className="radio-block__label">
          <input className="radio-block__input" type="radio" name={name} value="100" />
          <span className="radio-block__inner">100</span>
        </label>
      </div>
    </Label>
  );
};

export default RadioSearch;
