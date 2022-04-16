import './styles.scss';

import IProps from './types';

const Checkbox = ({ checkboxRef, label }: IProps) => {
  return (
    <label className="checkbox">
      <input ref={checkboxRef} className="checkbox__input" type="checkbox" />
      <div className="checkbox__checkbox"></div>
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
