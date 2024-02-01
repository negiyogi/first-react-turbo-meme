// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function Header(props) {
  return (
    <div>
        
     <nav class="main-header navbar navbar-expand navbar-white navbar-light">
 
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="/" class="nav-link">{props.title}</Link>
      </li>
      {/* <li class="nav-item d-none d-sm-inline-block">
        <Link to="/" class="nav-link">Home</Link>
      </li> */}
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="/About" class="nav-link">About</Link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="/Dashboard" class="nav-link">Dashboard</Link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="/KBC" class="nav-link">KBC</Link>
      </li>
    </ul>

   
    
  </nav>
      
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
