import React from 'react'

const Header = () => {
return (
    <section>
            <header className="bg-gray-800 text-white px-16 py-5 flex justify-between items-center">
                    <div className="logo flex items-center gap-2">
                            <img src='/src/assets/CareMate.png'></img>
                            <h2 className='text-3xl text-green-800'>CareMate</h2>
                    </div>
                    <div className="px-10 py-2">
                            <nav className='flex gap-16 text-xl '>
                                    <a className='navItem' href='#'>Home</a>
                                    <a className='navItem' href='#'>Appointments</a>
                                    <a className='navItem' href='#'>Health Blog</a>
                                    <a className='navItem' href='#'>Reviews</a>
                            </nav>
                    </div>
                    <div className="flex gap-4">
                    <button className='bg-white text-[20px] hover:bg-green-800 hover:font-semibold hover:text-white text-black px-[32px] py-[4px] rounded-md'>Login</button>
                    <button className='bg-white text-[20px] hover:bg-green-800 hover:font-semibold hover:text-white text-black px-[32px] py-[4px] rounded-md'>Register</button>
                    </div>
            </header>
    </section>
)
}

export default Header