import { Component } from 'react';

import Label from '../Label/Label';

import './TextField.scss';

interface IProps {
  label: string;
}

class TextField extends Component<IProps> {
  render() {
    return (
      <div className="textfield">
        <Label>
          {this.props.label}
          <input className="textfield__input" type="text" />
        </Label>

        <div className="textfield__validation">Error</div>
      </div>
    );
  }
}

export default TextField;
