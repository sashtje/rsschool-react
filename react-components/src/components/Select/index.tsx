import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class Select extends Component<IProps> {
  handleChange = () => {
    const { textErr, name, errorReset, checkSubmitBtn } = this.props;

    if (textErr !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    return (
      <div className="selectfield">
        <Label>
          {this.props.label}
          <select
            className="selectfield__select"
            defaultValue=""
            ref={this.props.selectRef}
            onChange={this.handleChange}
          >
            <option key={-1} disabled></option>
            {this.props.options.map((option, ind) => (
              <option key={ind}>{option}</option>
            ))}
          </select>
        </Label>

        {this.props.textErr !== '' && (
          <div className="selectfield__validation">{this.props.textErr}</div>
        )}
      </div>
    );
  }
}

export default Select;