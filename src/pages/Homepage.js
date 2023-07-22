import React from 'react';
import {default as bannerImage} from '../assets/restauranfood.jpg';
import {default as bruchetta} from '../assets/bruchetta.jpeg';
import {default as greek_salad} from '../assets/greek_salad.jpg';
import {default as lemon_dessert} from '../assets/lemon_dessert.jpg';
import {default as testimonial_1} from '../assets/testimonials-1.webp';
import {default as testimonial_2} from '../assets/testimonials-2.webp';
import {default as testimonial_3} from '../assets/testimonials-3.webp';
import {default as testimonial_4} from '../assets/testimonials-4.webp';
import {default as about_1} from '../assets/mario-and-adrian-a.jpg';
import {default as about_2} from '../assets/mario-and-adrian-b.jpg';
import Specials from '../components/Specials';
import Banner from '../components/Banner';

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

const testimonialsArray = [
  {
    title: 'Awesome',
    imgSrc: testimonial_1,
    name: 'Chris',
    review: "The coolest place i've visited"
  },
  {
    title: 'Excellent',
    imgSrc: testimonial_2,
    name: 'Peter',
    review: "Grab a pasta here! It's delicious!"
  },
  {
    title: 'Love it',
    imgSrc: testimonial_3,
    name: 'Moris',
    review: 'A perfect place for a family dinner!'
  },
  {
    title: 'What was it?',
    imgSrc: testimonial_4,
    name: 'Vers',
    review: 'Love! Love! Love!'
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
      />
      <Specials specials={specialsArray}/>
      <div className="testimonials primary-background">
        <div className='container'>
          <h4 className='display-title'>Testimonials</h4>
          <div className="testimonials-content">
            {testimonialsArray.map((item) => (
              <div className='testimonial' key={item.name}>
                <p className="testimonial-title card-title">{item.title}</p>
                <div className='testimonial-wrapper'>
                  <img src={item.imgSrc} alt={item.name} className='testimonial-img'/>
                  <span className='testimonial-name small-font'>{item.name}</span>
                </div>
                <span className='testimonial-text paragraph-font'>{item.review}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='about container'>
        <div className='about-content'>
          <h1 className='primary-font main-title'>Little Lemon</h1>
          <p className="primary-font main-subtitle">Chicago</p>
          <p className="main-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className='about-img'>
          <img src={about_1} alt="Mario and Adrian"/>
          <img src={about_2} alt="Mario and Adrian"/>
        </div>
      </div>
    </main>
  )
}

export default Main;