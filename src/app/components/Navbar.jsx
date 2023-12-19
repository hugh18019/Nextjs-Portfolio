'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Navlink from './NavLink';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const links = ['Logo', 'About', 'Projects', 'Experience'];
  const [open, setOpen] = useState(true);

  return (
    <nav className='fixed top-0 left-0 right-0 h-[100px] bg-[#f9d256] z-10 bg-opacity-100'>
      <div className='flex flex-wrap flex-row items-center justify-between mx-auto p-8 w-[100%]'>
        <Link
          href={'/'}
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          LOGO
        </Link>
        <div
          className='mobile-menu block md:hidden'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <button className='flex items-center px-3 py-2 border rounded bg-slate-600 border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button className='flex items-center px-3 py-2 border rounded bg-slate-600 border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div
          className='menu hidden flex-col md:block md:w-auto h-[100px] w-[80px]'
          id='navbar-menu'
        >
          <ul className='flex Smd:p-0 md:flex-row md:space-x-8 mt-0'>
            {links.map((link, i) => (
              <Navlink key={`navlink-${i}`} href={link} title={link} />
            ))}
          </ul>
        </div>
      </div>
      {!open && <MenuOverlay links={links} />}
    </nav>
  );
};

export default Navbar;
