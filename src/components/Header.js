import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo-nav">
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
      </div>
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} color="#0290ff" />
      </div>
    </div>
  </header>
);

export default Header;
