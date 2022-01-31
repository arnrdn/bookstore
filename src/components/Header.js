import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo"><Link to="/">Bookstore CMS</Link></div>
    <nav>
      <ul className="nav-items">
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
