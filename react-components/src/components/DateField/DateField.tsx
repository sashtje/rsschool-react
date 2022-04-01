import { Component } from 'react';

import Label from '../Label/Label';

import './DateField.scss';

interface IProps {
  label: string;
}

class DateField extends Component<IProps> {
  render() {
    return (
      <div className="datefield">
        <Label>
          {this.props.label}
          <input className="datefield__input" type="date" />
        </Label>
      </div>
    );
  }
}

export default DateField;
