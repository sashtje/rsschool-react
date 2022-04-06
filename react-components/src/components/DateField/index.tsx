import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import IProps from './types';

class DateField extends Component<IProps> {
  render() {
    const { label, dateRef, textError, name, handleChangeInput } = this.props;

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
  }
}

export default DateField;
