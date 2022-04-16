import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'header__link header__link_is_chosen' : 'header__link';

  return (
    <header className="header">
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/form">
        Form
      </NavLink>
      <NavLink className={setActive} to="/about">
        About us
      </NavLink>
    </header>
  );
};

export default Header;
