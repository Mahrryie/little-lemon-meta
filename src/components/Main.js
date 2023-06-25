import React from 'react';
import Nav from './Nav';

const Main = () => {
  return (
    <main>
      <div class='banner'>
        <div class='banner-content'></div>
        <div class='banner-img'></div>
      </div>
      <div clas="specials">
        <div class="specials-header"></div>
        <div class="specials-content"></div>
      </div>
      <div class="testimonials">
        <h4>Testmonials</h4>
        <div class="testimonials-content"></div>
      </div>
      <div class='about'>
      <div class='about-content'></div>
        <div class='about-img'></div>
      </div>
    </main>
  )
}

export default Main;