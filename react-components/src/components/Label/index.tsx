import { Component } from 'react';

import './styles.scss';

import IProps from './types';

class Label extends Component<IProps> {
  returnClass = () => {
    const { className } = this.props;

    return className ? `label ${className}` : 'label';
  };

  render() {
    const { children } = this.props;

    return <label className={this.returnClass()}>{children}</label>;
  }
}

export default Label;
