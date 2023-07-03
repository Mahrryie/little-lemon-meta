import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list primary-font'>
        <Link className='nav-list-item' to="/">Home</Link>
        <Link className='nav-list-item' to="#">About</Link>
        <Link className='nav-list-item' to="#">Menu</Link>
        <Link className='nav-list-item' to="/booking">Reservations</Link>
        <Link className='nav-list-item' to="#">Order online</Link>
        <Link className='nav-list-item' to="#">Login</Link>
      </ul>
    </nav>
  )
}

export default Nav;