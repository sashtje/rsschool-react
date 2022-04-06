import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import IProps from './types';

class DateField extends Component<IProps> {
  handleChange = () => {
    const { textError, name, errorReset, checkSubmitBtn } = this.props;

    if (textError !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    const { label, dateRef, textError } = this.props;

    return (
      <div className="datefield">
        <Label>
          {label}
          <input
            ref={dateRef}
            className="datefield__input"
            type="date"
            onChange={this.handleChange}
          />
        </Label>

        {textError !== '' && <div className="datefield__validation">{textError}</div>}
      </div>
    );
  }
}

export default DateField;
