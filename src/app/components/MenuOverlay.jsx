import React from 'react';
import Navlink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, i) => (
        <li key={`menu-overlay-${i}`}>
          <Navlink href={link} title={link} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
