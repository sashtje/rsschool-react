import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Main</Link>
        <Link to="/about">About us</Link>
      </header>
    );
  }
}

export default Header;
