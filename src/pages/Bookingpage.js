import React from 'react';
import BookingForm from '../components/BookingForm';

const Bookingpage = ({availableTimesProps, dispatch, submitFcProp}) => {
  return (
    <BookingForm availableTimesProps={availableTimesProps} dispatch={dispatch} submitFcProp={submitFcProp}/>
  )
}

export default Bookingpage;