import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from './../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="gpt-3 logo" className="h-[16px]" />
      <ul className="list-none md:flex hidden items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li key={navLink.id} className={`text-white text-[18px] ml-10`}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <a href="#" className="text-white md:flex hidden mr-4 ">
        Sign in
      </a>
      <a className="md:flex hidden items-center justify-center px-4 py-2 border btn border-transparent rounded-md text-white">
        Sign up
      </a>
      <div className="md:hidden flex flex-1 items justify-end">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 absolute top-20 right-0 sidebar bg-gray-800 flex flex-col w-full z-30`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((navLink, index) => (
            <li
              key={navLink.id}
              className={`text-white text-[16px] ${
                index === navLinks.length - 1 ? 'mb-6' : 'mb-4'
              }`}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="flex items-center justify-center text-white my-2"
        >
          Sign in
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
