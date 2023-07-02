import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Bookingpage from './Bookingpage';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/booking" element={<Bookingpage />}></Route>
  </Routes>
  )
}

export default Main;