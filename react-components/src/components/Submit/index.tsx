import { Component } from 'react';

import './styles.scss';

import { IProps } from './types';

class Submit extends Component<IProps> {
  componentDidMount() {
    (this.props.refBtn.current as HTMLButtonElement).disabled = true;
  }

  render() {
    return (
      <button ref={this.props.refBtn} className="submit">
        Submit
      </button>
    );
  }
}

export default Submit;
