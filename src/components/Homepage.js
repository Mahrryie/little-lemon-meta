import React from 'react';
import {default as bannerImage} from '../assets/restauranfood.jpg';
import {default as bruchetta} from '../assets/bruchetta.jpeg';
import {default as greek_salad} from '../assets/greek_salad.jpg';
import {default as lemon_dessert} from '../assets/lemon_dessert.jpg';
import Button from './Button';
import Specials from './Specials';

const specialsArray = [
  {
    name: 'Greek salad',
    img: greek_salad,
    price: 10,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: 'Bruchetta',
    img: bruchetta,
    price: 10,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: 'Lemon dessert',
    img: lemon_dessert,
    price: 10,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
]

const Main = () => {
  return (
    <main>
      <div class='banner'>
        <div class="container">
          <div class='banner-content'>
            <h1 class='primary-font main-title'>Little Lemon</h1>
            <p class="primary-font main-subtitle">Chicago</p>
            <p class="main-description">We are a family owning Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button btnClass='primary-button banner-button'>Reserve a Table</Button>
          </div>
          <div class='banner-img'>
            <img src={bannerImage}/>
          </div>
        </div>
      </div>
      <Specials specials={specialsArray}/>
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