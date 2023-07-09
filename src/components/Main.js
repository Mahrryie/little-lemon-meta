import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Bookingpage from '../pages/Bookingpage';
import { fetchAPI, submitAPI } from '../api/api';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const submitResponse = submitAPI(formData);

    if (submitResponse) {
      navigate('/confirmed');
    }
  }

  const initializeTimes = () => {
    return fetchAPI(new Date());
 }

  const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.date));
  }

  const [availableTimes, dispatch] = useReducer(updateTimes,  initializeTimes());

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/booking" element={<Bookingpage availableTimesProps={availableTimes} dispatch={dispatch} submitFcProp={submitForm}/>}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
  </Routes>
  )
}

export default Main;