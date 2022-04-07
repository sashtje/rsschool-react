import { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import './styles.scss';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <FaSpinner />
      </div>
    );
  }
}

export default Loader;
