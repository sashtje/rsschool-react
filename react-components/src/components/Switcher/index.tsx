import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class Switcher extends Component<IProps> {
  render() {
    const { label, switcherRef } = this.props;

    return (
      <Label className="label_is_inline-flex">
        {label}
        <label className="switcher">
          <input ref={switcherRef} className="switcher__input" type="checkbox" />
          <span className="switcher__track">
            <span className="switcher__slider"></span>
          </span>
        </label>
      </Label>
    );
  }
}

export default Switcher;
