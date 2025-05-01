import React from 'react'
import MainLayout from '../components/MainLayout'

const SignUpInfo = [
  { label: 'Role', type: 'text', placeholder: 'Select Role', required:false },
  { label: 'First Name', type: 'text', placeholder: 'Enter your name', required:true },
  { label: 'Phone', type: 'number', placeholder: 'Enter your phone number', required:true },
  { label: 'Email', type: 'email', placeholder: 'Enter email', required:true },
  { label: 'Password', type: 'password', placeholder: 'Enter password', required:true }
]

const SignUp = () => {
  return (
    <MainLayout>
      <div className='bg-SignInUP bg-cover h-[89vh] flex justify-center items-center'>
        <div className="bg-[#9996968a] backdrop-blur-md w-1/3 h-fit rounded-xl flex flex-col px-10 py-6">
          <h1 className='text-3xl text-[#000000] font-semibold font-sans mb-2'>Sign Up</h1>
          <p className="text-lightBlack text-xl mb-5">Already a member?<a className='text-primaryText ml-4 cursor-pointer' href='#'>Login</a></p>

          {/* form section */}
          <form action="#" className='flex flex-col gap-y-1'>
            {
              SignUpInfo.map((item,index)=>{
                return(
                  <>
                  <label className='labelANai'>{item.label}</label>
                  <input type={item.type} className='inputBox' placeholder={item.placeholder} required={item.required}></input>
                  </>
                )
              })
            }
            <button type='submit' className='login-btn mt-5 h-14 w-2/3 self-center font-labelClass'>Submit</button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default SignUp