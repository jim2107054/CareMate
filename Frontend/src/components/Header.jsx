import React from 'react'
import logo from '/src/assets/CareMate.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

        const navigate = useNavigate();
return (
    <section>
            <header className="bg-[#d8d7d7b7] text-white px-16 py-4 flex justify-between items-center">
                    <div className="logo flex items-center gap-2">
                            <a onClick={()=>navigate('/home')} className="cursor-pointer"><img src={logo}></img></a>
                            <a onClick={()=>navigate('/home')} className="cursor-pointer"><h2 className='text-3xl text-primaryText'>CareMate</h2></a>
                            
                    </div>
                    <div className="px-10 py-2">
                            <nav className='flex gap-20 text-2xl text-navText '>
                                    <a className='navItem' href='#'>Home</a>
                                    <a className='navItem' href='#'>Appointments</a>
                                    <a className='navItem' href='#'>Health Blog</a>
                                    <a className='navItem' href='#'>Reviews</a>
                            </nav>
                    </div>
                    <div className="flex gap-8">
                    <button onClick={()=>navigate('/login')} className='login-btn'>Login</button>
                    <button onClick={()=>navigate('/signup')} className='login-btn'>Register</button>
                    </div>
            </header>
    </section>
)
}

export default Header