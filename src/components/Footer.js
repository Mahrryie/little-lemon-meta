import React from 'react';
import { Link } from 'react-router-dom';
import {default as footerLogo} from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className='footer secondary-background'>
      <div className="container">
        <div className='footer-img'>
          <img src={footerLogo} alt="footer-logo"/>
        </div>
        <div className='footer-nav'>
          <h5 className="small-font">Doormat navigation</h5>
          <ul>
            <li className="paragraph-font dark-color">
              <Link to="/">Home</Link></li>
            <li className="paragraph-font dark-color">
              <Link to="#">About</Link></li>
            <li className="paragraph-font dark-color">
              <Link to="#">Menu</Link></li>
            <li className="paragraph-font dark-color">
              <Link to="/booking">Reservations</Link></li>
            <li className="paragraph-font dark-color">
              <Link to="#">Order online</Link></li>
            <li className="paragraph-font dark-color">
              <Link to="#">Login</Link></li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h5 className="small-font">Contact</h5>
          <ul>
            <li className="paragraph-font dark-color"> 34/1, Lincolm street</li>
            <li className="paragraph-font dark-color">
              <a href="tel:11111111">Phone: 11111111</a></li>
            <li className="paragraph-font dark-color">
              <a href="mailto:webmaster@example.com">Email: little_lemon@mail.com</a></li>
          </ul>
        </div>
        <div className='footer-socials'>
          <h5 className="small-font">Links to Socials</h5>
          <ul>
            <li className="paragraph-font dark-color">
              <a href="facebook.com">Facebook</a></li>
            <li className="paragraph-font dark-color">
              <a href="instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;