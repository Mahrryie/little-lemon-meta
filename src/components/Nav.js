import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 960px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 960px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <nav>
      {
        !matches && <ul className='nav-list primary-font'>
          <li><Link className='nav-list-item' to="/">Home</Link></li>
          <li><Link className='nav-list-item' to="#">About</Link></li>
          <li><Link className='nav-list-item' to="#">Menu</Link></li>
          <li><Link className='nav-list-item' to="/booking">Reservations</Link></li>
          <li><Link className='nav-list-item' to="#">Order online</Link></li>
          <li><Link className='nav-list-item' to="#">Login</Link></li>
        </ul>
      }
      {matches && <>
        <div className='hamburger' onClick={toggleHamburger}>
          <div className='burger burger1'></div>
          <div className='burger burger2'></div>
          <div className='burger burger3'></div>
        </div>

        <ul className={`nav-list primary-font nav-in-hamburger ${hamburgerOpen ? 'show-menu' : 'hide-menu'}`} >
          <li><Link className='nav-list-item' to="/">Home</Link></li>
          <li><Link className='nav-list-item' to="#">About</Link></li>
          <li><Link className='nav-list-item' to="#">Menu</Link></li>
          <li><Link className='nav-list-item' to="/booking">Reservations</Link></li>
          <li><Link className='nav-list-item' to="#">Order online</Link></li>
          <li><Link className='nav-list-item' to="#">Login</Link></li>
        </ul>
      </>}
    </nav>
  )
}

export default Nav;