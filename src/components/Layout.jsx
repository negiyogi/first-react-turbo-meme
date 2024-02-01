// components/Layout.js
import React from 'react';
import Header from './Header';
import Sidenav from './Sidenav';
import Footer from './Footer';

const Layout = ({ component }) => {
  return (
    <div className="wrapper">
      <Header title="Home"/>
      <Sidenav />
      {component}
      <Footer />
    </div>
  );
};

export default Layout;
