import React from 'react'

const Header = () => {
return (
    <section>
            <header className="bg-[#d8d7d7b7] text-white px-16 py-4 flex justify-between items-center">
                    <div className="logo flex items-center gap-2">
                            <img src='/src/assets/CareMate.png'></img>
                            <h2 className='text-3xl text-primaryText'>CareMate</h2>
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
                    <button className='login-btn'>Login</button>
                    <button className='login-btn'>Register</button>
                    </div>
            </header>
    </section>
)
}

export default Header