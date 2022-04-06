import { Component } from 'react';

import './styles.scss';

import { IProps } from './types';

class Submit extends Component<IProps> {
  componentDidMount() {
    const { refBtn } = this.props;

    (refBtn.current as HTMLButtonElement).disabled = true;
  }

  render() {
    const { refBtn } = this.props;

    return (
      <button ref={refBtn} className="submit">
        Submit
      </button>
    );
  }
}

export default Submit;
