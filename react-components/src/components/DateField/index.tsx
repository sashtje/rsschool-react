import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import IProps from './types';

class DateField extends Component<IProps> {
  handleChange = () => {
    const { textErr, name, errorReset, checkSubmitBtn } = this.props;

    if (textErr !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    return (
      <div className="datefield">
        <Label>
          {this.props.label}
          <input
            ref={this.props.dateRef}
            className="datefield__input"
            type="date"
            onChange={this.handleChange}
          />
        </Label>

        {this.props.textErr !== '' && (
          <div className="datefield__validation">{this.props.textErr}</div>
        )}
      </div>
    );
  }
}

export default DateField;
