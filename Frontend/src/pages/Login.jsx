import React from 'react'
import MainLayout from '../components/MainLayout'

const LoginInfo = [
  { label: 'Role', type: 'text', placeholder: 'Select Role', required:false },
  { label: 'Email', type: 'email', placeholder: 'Enter email', required:true },
  { label: 'Password', type: 'password', placeholder: 'Enter password', required:true }
]

const Login = () => {
  return (
    <MainLayout>
      <div className='bg-SignInUP bg-cover h-[89vh] flex justify-center items-center'>
        <div className="bg-[#9996968a] backdrop-blur-md w-1/3 h-fit rounded-xl flex flex-col px-10 py-6">
          <h1 className='text-3xl text-[#000000] font-semibold font-sans mb-2'>Login</h1>
          <p className="text-lightBlack text-xl mb-5">Are you a new member?<a className='text-primaryText ml-4 cursor-pointer' href='#'>SignUp here</a></p>

          {/* form section */}
          <form action="#" className='flex flex-col gap-y-1'>
            {
              LoginInfo.map((item,index)=>{
                return(
                  <>
                  <label className='labelANai'>{item.label}</label>
                  <input type={item.type} className='inputBox' placeholder={item.placeholder} required={item.required}></input>
                  </>
                )
              })
            }
            <button type='submit' className='login-btn mt-5 h-14 w-2/3 self-center font-labelClass'>Login</button>
          </form>
          <a href='#' className="justify-center text-center text-xl mt-3 text-lightBlack font-labelClass">Forgot Password ?</a>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login