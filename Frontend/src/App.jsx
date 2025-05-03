import React from 'react'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import MyAppointment from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
import Reviews from './pages/Reviews';
import Doctors from './pages/Doctors';
import HealthBlog from './pages/HealthBlog';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/appointment' element={<Appointments/>}/>
      <Route path='/my-appointment' element={<MyAppointment/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/blog' element={<HealthBlog/>}/>
    </Routes>
    </>
  )
}

export default App