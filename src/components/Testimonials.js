
import {default as testimonial_1} from '../assets/testimonials-1.webp';
import {default as testimonial_2} from '../assets/testimonials-2.webp';
import {default as testimonial_3} from '../assets/testimonials-3.webp';
import {default as testimonial_4} from '../assets/testimonials-4.webp';

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

const Testimonials = () => {
  return (
    <section className="testimonials primary-background">
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
    </section>
  )
}

export default Testimonials;