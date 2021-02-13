import React from 'react';
import MenuList from './MenuList';
import Menu from './Menu';
import Scroll from './Scroll';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <Menu />
        <MenuList />
      </div>
      <Scroll />
    </header>
  );
}

export default Header;
