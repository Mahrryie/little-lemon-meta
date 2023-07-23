
import {default as about_1} from '../assets/mario-and-adrian-a.jpg';
import {default as about_2} from '../assets/mario-and-adrian-b.jpg';

const About = () => {
  return (
    <section className='about container'>
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
    </section>
  )
}

export default About;