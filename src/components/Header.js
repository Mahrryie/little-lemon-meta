import React from 'react';
import Nav from './Nav';
import { default as logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
       <img src={logo} alt="header-logo"/>
      <Nav/>
      </div>
    </header>
  )
}

export default Header;