import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../helpers/Auth'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
export const Navbar = () => {
  const [name,setName ]=useState(null)
 const navigate=useNavigate()

 useEffect(() => {
 
  const user = async () => { // Make the function async
    try {
      const response = await getAccessToken(); // Use await to get the access token
      if (response) {
        const data=jwt_decode(response)
        console.log(data);
        setName(data.username)
      } else {
        console.log('no token');
      }
    } catch (error) {
      console.error(error);
    }
  };

  user();
}, []);


  const handleLogout = ()=>{
    localStorage.removeItem('authToken')
    navigate('/login')

  }
  const handleLogin = ()=>{
    navigate('/login')

  }
 
  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">passVault</span>
        </a>
        <div className="flex items-center">
          <a href="tel:5541251234" className="mr-6 text-sm text-gray-500 dark:text-white hover:underline"> {name ? name : ''}</a>
          <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
          onClick={name ? handleLogout : handleLogin}
          >{name ? 'logout':'login'}</a>
        </div>
      </div>
    </nav>
    <nav className="bg-gray-700 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-3 mx-auto h-8">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page"></a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:underline"></a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:underline"></a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:underline"
           
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
