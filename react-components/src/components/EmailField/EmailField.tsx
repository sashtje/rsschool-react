import { Component } from 'react';

import Label from '../Label/Label';

import './EmailField.scss';

interface IProps {
  label: string;
}

class EmailField extends Component<IProps> {
  render() {
    return (
      <div className="emailfield">
        <Label>
          {this.props.label}
          <input className="emailfield__input" type="email" />
        </Label>

        <div className="emailfield__validation">Error</div>
      </div>
    );
  }
}

export default EmailField;
