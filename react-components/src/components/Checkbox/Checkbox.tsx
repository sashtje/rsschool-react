import { Component } from 'react';

import './Checkbox.scss';

interface IProps {
  label: string;
  checkboxRef: React.RefObject<HTMLInputElement>;
}

class Checkbox extends Component<IProps> {
  render() {
    return (
      <label className="checkbox">
        <input ref={this.props.checkboxRef} className="checkbox__input" type="checkbox" />
        <div className="checkbox__checkbox"></div>
        <span className="checkbox__label">{this.props.label}</span>
      </label>
    );
  }
}

export default Checkbox;
