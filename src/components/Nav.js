import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list primary-font'>
        <li><Link className='nav-list-item' to="/">Home</Link></li>
        <li><Link className='nav-list-item' to="#">About</Link></li>
        <li><Link className='nav-list-item' to="#">Menu</Link></li>
        <li><Link className='nav-list-item' to="/booking">Reservations</Link></li>
        <li><Link className='nav-list-item' to="#">Order online</Link></li>
        <li><Link className='nav-list-item' to="#">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;