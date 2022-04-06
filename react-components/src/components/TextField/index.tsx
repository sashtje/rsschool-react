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

  render() {
    const { label, inputRef, textError, name, handleChangeInput } = this.props;

    return (
      <div className="textfield">
        <Label>
          {label}
          <input
            ref={inputRef}
            className="textfield__input"
            type="text"
            onChange={() => handleChangeInput(`${name}Error`, textError)}
          />
        </Label>

        {textError !== '' && <div className="textfield__validation">{textError}</div>}
      </div>
    );
  }
}

export default TextField;
