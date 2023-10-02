import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../src/Services/UserService'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import { getAccessToken } from '../helpers/Auth';
export const LoginPage = () => {
  
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(()=>{
    const token=getAccessToken()
    if (token){
      navigate('/')

    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response= await login(formData)

    if (response.status ===200){
      const data=response.data
      // console.log(data,'last')
      localStorage.setItem('authToken',JSON.stringify(data))
      // const ac=getAccessToken()
      // console.log(ac,'ac')

      toast.success('login successfully')
      navigate('/')
    }else{
      toast.error('invalid credential')
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:ring-4 focus:ring-blue-300"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-gray-700">
          Don't have an account? <button ><Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Signup</Link></button>
        </p>
      </div>
      
    </div>
  );
};


