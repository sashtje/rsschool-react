import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class TextField extends Component<IProps> {
  componentDidMount() {
    const { autofocus, inputRef } = this.props;

    if (autofocus) {
      inputRef.current!.focus();
    }
  }

  handleChange = () => {
    const { textError, name, errorReset, checkSubmitBtn } = this.props;

    if (textError !== '') {
      errorReset(`${name}Error`);
    }

    checkSubmitBtn();
  };

  render() {
    const { label, inputRef, textError } = this.props;

    return (
      <div className="textfield">
        <Label>
          {label}
          <input
            ref={inputRef}
            className="textfield__input"
            type="text"
            onChange={this.handleChange}
          />
        </Label>

        {textError !== '' && <div className="textfield__validation">{textError}</div>}
      </div>
    );
  }
}

export default TextField;
