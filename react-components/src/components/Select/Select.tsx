import { Component } from 'react';

import Label from '../Label/Label';

import './Select.scss';

interface IProps {
  label: string;
  options: string[];
}

class Select extends Component<IProps> {
  render() {
    return (
      <div className="selectfield">
        <Label>
          {this.props.label}
          <select className="selectfield__select" defaultValue="">
            <option key={-1} disabled></option>
            {this.props.options.map((option, ind) => (
              <option key={ind}>{option}</option>
            ))}
          </select>
        </Label>

        <div className="selectfield__validation">Error</div>
      </div>
    );
  }
}

export default Select;
