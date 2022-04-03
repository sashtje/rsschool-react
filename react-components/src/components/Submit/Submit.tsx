import { Component } from 'react';

import './Submit.scss';

interface IProps {
  refBtn: React.RefObject<HTMLButtonElement>;
}

class Submit extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

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
