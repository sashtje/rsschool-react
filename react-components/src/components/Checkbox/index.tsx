import './styles.scss';

import IProps from './types';

const Checkbox = ({ label, name, register }: IProps) => {
  return (
    <label className="checkbox">
      <input {...register(name)} className="checkbox__input" type="checkbox" />
      <div className="checkbox__checkbox"></div>
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
