import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Bookingpage from '../pages/Bookingpage';

const Main = () => {
  const initializeTimes = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]

  const updateTimes = (state, action) => {
    if (action.date === '2023-07-23') {return ['19:00', '20:00', '21:00', '22:00']};
    return initializeTimes;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/booking" element={<Bookingpage availableTimesProps={availableTimes} dispatch={dispatch}/>}></Route>
  </Routes>
  )
}

export default Main;