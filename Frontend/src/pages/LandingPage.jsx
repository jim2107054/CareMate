import React from 'react'
import MainLayout from '../components/MainLayout'

const LandingPage = () => {
  return (
    <MainLayout>
      <div className="bg-primaryText h-[91vh] grid grid-cols-[1.5fr_1fr] gap-24">
        <div className="flex flex-col justify-center gap-y-10 px-24">
          <h1 className='text-white text-6xl'>Health in Your<br/> Hands.</h1>
          <p className='text-white'>Take control of your healthcare with CareMate. Book appointments with ease, explore health blogs, and stay on top of your well-being, all in one place.</p>
          <button className='login-btn w-1/3 hover:bg-hoverText h-14 text-3xl font-semibold hover:text-white'>Get Started</button>
        </div>
        <div className="bg-red-500">
          <img src='/src/assets/landingPagePhoto.png' className='h-[91vh]'></img>
        </div>
      </div>
    </MainLayout>
  )
}

export default LandingPage