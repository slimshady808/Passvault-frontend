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

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const token= await getAccessToken()
  //     if (token){
  //       const decode=jwt_decode(token)
  //       setUser(decode.user_id)
  //     const response=await fetchPassword(user)
  //     if (response){
  //       setPassword(response)
  //     }
  //     }else{
  //       // console.log('no token')
  //     }
  //   }
  //   fetchData()

  // },[user])

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken();
      if (token) {
        const decode = jwt_decode(token);
        const userId = decode.user_id;
        if (userId) {
          setUser(userId);
          // console.log(user)
          const response = await fetchPassword(userId);
          if (response) {
            setPassword(response);
          }
        }
      } else {
        // console.log('no token')
      }
    };
    fetchData();
  }, [user]);
  

  const handleDelete = async(id)=>{
   await deletePassword(id)
    toast.success('deleted')
    // console.log(data)
    setPassword(passwords.filter((password) => password.id !== id));
  }
  const handleCopy = async(password)=>{
    navigator.clipboard.writeText(password)
    .then(() => {
      toast.success('Password copied to clipboard');
     
    })
    .catch((error) => {
      console.error('Failed to copy password: ', error);
    });
  }


  return (
<div className="flex flex-wrap justify-center">

<h1 className="text-4xl font-extrabold tracking-tight mb-8 text-center w-full"> {passwords.length > 0 ? 'Saved Passwords' : 'Please save passwords'}</h1>
  {passwords.map((password, index) => (
    <PasswordCard
      key={index}
      id={password.id}
      password={password.password}
      username={password.username}
      website={password.website}
      onDelete={handleDelete}
      onCopy={handleCopy}
    />
  ))}
</div>

  );
};