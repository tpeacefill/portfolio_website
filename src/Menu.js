import React, { useState } from 'react';
import './Menu.css'; // Assuming you store the CSS in Menu.css

const Menu = () => {
  // State to track the active menu item
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  // Menu items data
  const menuItems = ['Home', 'About Me', 'Services', 'Products'];

  return (
    <ul className="MenuItems">
      {menuItems.map((item) => (
        <li
          key={item}
          className={activeMenuItem === item ? 'active' : ''}
          onClick={() => setActiveMenuItem(item)}
        >
          {activeMenuItem === item && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="#8A74FF" />
            </svg>
          )}{' '}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
