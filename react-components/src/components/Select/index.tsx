import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class Select extends Component<IProps> {
  render() {
    const { label, selectRef, options, textError, name, handleChangeInput } = this.props;

    return (
      <div className="selectfield">
        <Label>
          {label}
          <select
            className="selectfield__select"
            defaultValue=""
            ref={selectRef}
            onChange={() => handleChangeInput(`${name}Error`, textError)}
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
