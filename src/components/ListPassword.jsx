import React, { useEffect, useState } from 'react'
import { PasswordCard } from './PasswordCard'
import {fetchPassword} from '../Services/UserService'
import jwt_decode from 'jwt-decode'
import { getAccessToken } from '../helpers/Auth';
import {deletePassword} from '../Services/UserService'
import toast from 'react-hot-toast';
export const ListPassword = () => {
  const [passwords,setPassword]=useState([])
  const [user,setUser]=useState('')

  useEffect(()=>{
    const fetchData = async()=>{
      const token= await getAccessToken()
      if (token){
        const decode=jwt_decode(token)
        setUser(decode.user_id)
      const response=await fetchPassword(user)
      if (response){
        setPassword(response)
      }
      }else{
        console.log('no token')
      }
    }
    fetchData()

  },[user])

  const handleDelete = async(id)=>{
    const data = await deletePassword(id)
    toast.success('deleted')
    setPassword(passwords.filter((password) => password.id !== id));
  }


  return (
    <div className="flex flex-wrap justify-center">
      {passwords.map((password, index) => (
        <PasswordCard
          key={index}
          id ={password.id}
          password={password.password}
          username={password.username}
          website={password.website}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};