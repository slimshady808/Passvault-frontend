import React, { useEffect, useState } from 'react'
import bannerImage from '../images/pass.png'
import { PasswordModal } from './PasswordModal'
import { getAccessToken } from '../helpers/Auth'
import jwt_decode from 'jwt-decode'
import { Toaster } from 'react-hot-toast'
export const Header = () => {
  const [user_id,setUser_id]=useState('')

  useEffect(()=>{
    const user = async()=>{
      try{
        const response = await getAccessToken();
        if (response){
          const data = jwt_decode(response)
          setUser_id(data.user_id)
        }else{
          setUser_id('no')
          // console.log('no token')
        }
      }catch(error){
        console.error(error);
      }
    }
    user()
    
  },[])
  return (


  <section className="  bg-white dark:bg-gray-900  ">
  <Toaster position='top-center' reverseOrder='false'></Toaster>
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Generate Strong and Secure Passwords</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Safeguard your online accounts with ease. Create complex and uncrackable passwords effortlessly with our Password Generator.</p>

      <div className="flex flex-col lg:flex-row">
        <button className="w-full lg:w-auto inline-flex items-center justify-center px-5 py-3 mb-3 lg:mb-0 mr-0 lg:mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Generate Password
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <button className="w-full lg:w-auto inline-flex items-center justify-center">
          <PasswordModal id={user_id} />
        </button>
      </div>
    </div>
    <div className="lg:col-span-5 lg:flex lg:items-center">
      <img src={bannerImage} alt="mockup" className="mx-auto lg:mx-0" />
    </div>
  </div>
</section>

  )
}
