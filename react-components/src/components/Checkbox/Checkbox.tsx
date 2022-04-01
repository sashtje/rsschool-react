import { Component } from 'react';

import './Checkbox.scss';

interface IProps {
  label: string;
}

class Checkbox extends Component<IProps> {
  render() {
    return (
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" />
        <div className="checkbox__checkbox"></div>
        <span className="checkbox__label">{this.props.label}</span>
      </label>
    );
  }
}

export default Checkbox;
