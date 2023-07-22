import React from 'react';
import Banner from './Banner';
import {default as restaurantChef} from '../assets/restaurant-chef.jpg';

const ConfirmedBooking = () => {
  return (
    <>
    <Banner
        mainTitle='Your booking is confirmed'
        description='We are impatiently waiting for you!'
        bannerImage={restaurantChef}
      />
    <div className="container">
      <h2 className='display-title confirmation-title'>Thank you for choosing us!</h2>
    </div>
    </>
  )
}

export default ConfirmedBooking;