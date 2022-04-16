import Label from '../Label';

import './styles.scss';

import IProps from './types';

const DateField = ({ label, dateRef, textError, name, handleChangeInput }: IProps) => {
  return (
    <div className="datefield">
      <Label>
        {label}
        <input
          ref={dateRef}
          className="datefield__input"
          type="date"
          onChange={() => handleChangeInput(`${name}Error`, textError)}
        />
      </Label>

      {textError !== '' && <div className="datefield__validation">{textError}</div>}
    </div>
  );
};

export default DateField;
