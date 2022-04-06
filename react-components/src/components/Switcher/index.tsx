import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class Switcher extends Component<IProps> {
  render() {
    return (
      <Label className="label_is_inline-flex">
        {this.props.label}
        <label className="switcher">
          <input ref={this.props.switcherRef} className="switcher__input" type="checkbox" />
          <span className="switcher__track">
            <span className="switcher__slider"></span>
          </span>
        </label>
      </Label>
    );
  }
}

export default Switcher;
