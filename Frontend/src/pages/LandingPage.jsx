import React from 'react'
import MainLayout from '../components/MainLayout'
import { useNavigate } from 'react-router-dom'
import LandingPagePhoto from '../assets/landingPagePhoto.png'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="bg-primaryText h-[90.5vh] grid grid-cols-[1fr_1fr] gap-0 md:gap-40 overflow-hidden">
        <div className="flex flex-col justify-center gap-y-10 px-28">
          <h1 className='text-white text-6xl'>Health in Your<br/> Hands.</h1>
          <p className='text-white'>Take control of your healthcare with CareMate. Book appointments with ease, explore health blogs, and stay on top of your well-being, all in one place.</p>
          <button onClick={()=>navigate('/login')} className='login-btn w-1/3 hover:bg-blue-600 h-14 text-xl font-semibold hover:text-white'>Get Started</button>
        </div>
        <div className="bg-red-500 w-full">
          <img src={LandingPagePhoto} className='w-full'></img>
        </div>
      </div>
    </MainLayout>
  )
}

export default LandingPage