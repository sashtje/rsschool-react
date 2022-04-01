import { Component } from 'react';

import './Label.scss';

interface IProps {
  className?: string;
}

class Label extends Component<IProps> {
  returnClass = () => {
    return this.props.className ? `label ${this.props.className}` : 'label';
  };

  render() {
    return <label className={this.returnClass()}>{this.props.children}</label>;
  }
}

export default Label;
