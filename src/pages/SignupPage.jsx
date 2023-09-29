import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {register} from '../Services/UserService'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
export const SignupPage = () => {
  const navigate=useNavigate()
  const [confirmPassword,setConfirmPassword]=useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!confirmPassword){
      toast.error('please enter all fields')
      return
    }
    if(formData.password!==confirmPassword){
      toast.error('password is not mattching')
      return
    }
    const response=await register(formData);
    console.log(response)
    if (response===201){
      toast.success('register successfully')
      navigate('/login')

    }else{
      toast.error('please enter all details')
    }

    
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              // value={formData.confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:ring-4 focus:ring-blue-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-gray-700">
          Already have an account? <button><Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">  Login </Link></button>
          
        </p>
      </div>
    </div>
  );
};


