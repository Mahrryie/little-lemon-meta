import React from 'react';
import {default as bannerImage} from '../assets/restauranfood.jpg';
import {default as bruchetta} from '../assets/bruchetta.jpeg';
import {default as greek_salad} from '../assets/greek_salad.jpg';
import {default as lemon_dessert} from '../assets/lemon_dessert.jpg';
import Specials from '../components/Specials';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

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
      <Banner
        bannerImage={bannerImage}
        mainTitle='Little Lemon'
        subTitle='Chicago'
        description='We are a family owning Mediterranian restaurant, focused on traditional recipes served with a modern twist.'
        buttonText='Reserve a Table'
        routeUrl='/booking'
      />
      <Specials specials={specialsArray}/>
      <Testimonials/>
      <About/>
    </main>
  )
}

export default Main;