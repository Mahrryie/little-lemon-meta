import React from 'react';
import BookingForm from '../components/BookingForm';

const Bookingpage = ({availableTimesProps, dispatch}) => {
  return (
    <BookingForm availableTimesProps={availableTimesProps} dispatch={dispatch}/>
  )
}

export default Bookingpage;