import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import './styles.scss';

const Header = () => {
  const { id } = useParams();

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'header__link header__link_is_chosen' : 'header__link';

  const setActiveAndVisible = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'header__link header__link_is_chosen header__link_margin_top'
      : 'header__link_is_hidden';

  const handleClickPhoto = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__row">
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
        <NavLink className={setActive} to="/form">
          Form
        </NavLink>
        <NavLink className={setActive} to="/about">
          About us
        </NavLink>
      </div>
      <div className="header__row">
        <NavLink className={setActiveAndVisible} to="/photo" onClick={handleClickPhoto}>
          Photo {id}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
