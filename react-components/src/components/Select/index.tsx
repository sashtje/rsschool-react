import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class Select extends Component<IProps> {
  handleChange = () => {
    const { textError, name, errorReset, checkSubmitBtn } = this.props;

    if (textError !== '') {
      errorReset(`${name}Error`);
    }

    checkSubmitBtn();
  };

  render() {
    const { label, selectRef, options, textError } = this.props;

    return (
      <div className="selectfield">
        <Label>
          {label}
          <select
            className="selectfield__select"
            defaultValue=""
            ref={selectRef}
            onChange={this.handleChange}
          >
            <option key={-1} disabled></option>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </Label>

        {textError !== '' && <div className="selectfield__validation">{textError}</div>}
      </div>
    );
  }
}

export default Select;
