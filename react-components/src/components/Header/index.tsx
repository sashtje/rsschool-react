import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Header extends Component {
  setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'header__link header__link_is_chosen' : 'header__link';

  render() {
    return (
      <header className="header">
        <NavLink className={this.setActive} to="/">
          Home
        </NavLink>
        <NavLink className={this.setActive} to="/form">
          Form
        </NavLink>
        <NavLink className={this.setActive} to="/about">
          About us
        </NavLink>
      </header>
    );
  }
}

export default Header;
