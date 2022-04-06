import { Component } from 'react';

import './styles.scss';

import IProps from './types';

class Checkbox extends Component<IProps> {
  render() {
    const { checkboxRef, label } = this.props;

    return (
      <label className="checkbox">
        <input ref={checkboxRef} className="checkbox__input" type="checkbox" />
        <div className="checkbox__checkbox"></div>
        <span className="checkbox__label">{label}</span>
      </label>
    );
  }
}

export default Checkbox;
