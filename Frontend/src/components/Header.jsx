import React, { useState } from "react";
import logo from "/src/assets/CareMate.png";
import { NavLink, useNavigate } from "react-router-dom";
import profile_pic from '../assets/CareMate.png'
import { MdOutlineArrowDropDown } from "react-icons/md";


const Header = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(true);
  const haldleLogOut = () => {
        setToken(!token)
        navigate('/login')
  }
  return (
    <section>
      <header className="bg-[#f8eeee] text-white border-b px-16 py-2 flex justify-between items-center top-0 z-50 shadow w-full">
        <div className="logo flex items-center gap-2">
          <a onClick={() => navigate("/home")} className="cursor-pointer">
            <img src={logo}></img>
          </a>
          <a onClick={() => navigate("/home")} className="cursor-pointer">
            <h2 className="text-3xl text-primaryText">CareMate</h2>
          </a>
        </div>
        <div className="px-10 py-2">
          <ul className="flex gap-10 text-2xl text-navText">
            <NavLink to="/home">
              <li>Home</li>
              <hr />
            </NavLink>
            <NavLink to="/doctors">
              <li>Doctors</li>
              <hr />
            </NavLink>
            <NavLink to="/appointment">
              <li>Appointments</li>
              <hr />
            </NavLink>
            <NavLink to="/blog">
              <li>Health Blog</li>
              <hr />
            </NavLink>
            <NavLink to="/reviews">
              <li>Reviews</li>
              <hr />
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          {token ? (
            <div className="flex items-center cursor-pointer group relative">
                <img src={profile_pic} alt="Profile" className="w-10 rounded-full" />
                <MdOutlineArrowDropDown className="w-6 text-5xl"/>
                <div className="absolute top-0 right-0 pt-14 text-base text-gray-800 z-20 group-hover:block hidden">
                        <div className="bg-stone-300 min-w-48 rounded flex flex-col gap-2 p-4">
                                <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={()=>navigate('/my-appointment')} className="hover:text-black cursor-pointer">My Appointment</p>
                                <p onClick={()=>haldleLogOut()} className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                </div>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="login-btn">
                Login
              </button>
              <button onClick={() => navigate("/signup")} className="login-btn">
                Register
              </button>
            </>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
