// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieDetails from './components/MovieDetails';
import Theaters from './components/Theaters';



import Seats from './components/seats/Seats';
import Final from './components/seats/Final';

import Profile from './components/user/Profile';
import EditAccount from './components/user/EditAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/moviedetails/:movie_id" element={<MovieDetails />} />
          <Route path='/theaters' element={<Theaters/>}/>
          <Route path="/seats" element={<Seats />} />
          <Route path="/Final/:selected/:totalprice" element={<Final />} />
          <Route path='/profile/:user_id' element = {<Profile/>}/>
          <Route path='/editAccount' element = {<EditAccount/>}/>

        </Routes>
        <ToastContainer theme="dark" />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
