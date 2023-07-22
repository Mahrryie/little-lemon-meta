import React from 'react';
import BookingForm from '../components/BookingForm';
import {default as restaurant} from '../assets/restaurant.jpg';
import Banner from '../components/Banner';

const Bookingpage = ({availableTimesProps, dispatch, submitFcProp}) => {
  return (
    <>
      <Banner
        bannerImage={restaurant}
        mainTitle='Book a table'
        description='Here you can make a reservation for any table you want. We will find the best option to suite your needs.'
      />
      <BookingForm availableTimesProps={availableTimesProps} dispatch={dispatch} submitFcProp={submitFcProp}/>
    </>
  )
}

export default Bookingpage;