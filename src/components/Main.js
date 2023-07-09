import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Bookingpage from '../pages/Bookingpage';
import { fetchAPI } from '../api/api';

const Main = () => {
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
      <Route path="/booking" element={<Bookingpage availableTimesProps={availableTimes} dispatch={dispatch}/>}></Route>
  </Routes>
  )
}

export default Main;