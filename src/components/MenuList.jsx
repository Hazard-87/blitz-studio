import React from 'react';

function MenuList() {
  const items = ['HOME', 'ABOUT ME', 'PORTFOLIO', 'CONTACT'];
  return (
    <ul className="menu-list">
      {items.map((item, index) => (
        <li className="menu-list__item" key={item + index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
