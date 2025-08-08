import React from 'react';
import { NavLink } from 'react-router-dom';  

const Navbar = () => {
  const links = <>
    <NavLink
      to="/"
      className={({ isActive }) => isActive ? 'm-2 ac border-b-2 border-blue-600 pb-1' : 'm-2'}
    >
      <li>Home</li>
    </NavLink>

    <NavLink
      to="/bookings"
      className={({ isActive }) => isActive ? 'm-2 ac border-b-2 border-blue-600 pb-1' : 'm-2'}
    >
      <li>My-Bookings</li>
    </NavLink>

    <NavLink
      to="/blogs"
      className={({ isActive }) => isActive ? 'm-2 ac border-b-2 border-blue-600 pb-1' : 'm-2'}
    >
      <li>Blogs</li>
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) => isActive ? 'm-2 ac border-b-2 border-blue-600 pb-1' : 'm-2'}
    >
      <li>Contact Us</li>
    </NavLink>
  </>;

  return (
    <div className="lg:px-24 navbar bg-gray-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <img className="lg:w-[7%] w-[16%]" src="https://i.ibb.co.com/MxSWTZpd/logo.png" alt="" />
        <a className="ml-2 font-bold text-xl">Phudu</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-600 text-amber-50 rounded-3xl">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
