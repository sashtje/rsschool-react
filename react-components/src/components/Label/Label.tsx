import { Component } from 'react';

import './Label.scss';

class Label extends Component {
  render() {
    return <label className="label">{this.props.children}</label>;
  }
}

export default Label;
