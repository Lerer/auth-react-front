import { NavLink } from 'react-router-dom';
import React from 'react';

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
  </div>
);
/**
 *  Add the content below to add the external-api page
 *  <NavLink
 *    to="/external-api"
 *    exact
 *    className="nav-link"
 *    activeClassName="router-link-exact-active"
 *  >
 *    External API
 *  </NavLink>
 *
 */

export default MainNav;
