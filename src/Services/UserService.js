import axios from "axios";
import {server} from '../server'

export const login = async (formData)=>{
  try{
    const data =await axios.post(`${server}/account/token/`,formData)
    console.log(data,'data')
    return data
  }catch(error){
    console.error('error in login',error.response.status)
    return error.response
  }
}
export const register=async (formData)=>{
  try{
    const data =await axios.post(`${server}/account/register/`,formData)
    console.log(data)
    return data.status
  }catch(error){
    console.error('error for creating account',error)
    return null
  }
}

export const savePassword = async(formData)=>{
  try{
    const response = await axios.post(`${server}/password/password/`,formData)
    console.log(response)
    return response.status
  }catch(error){
    console.error('error in creating ',error)
    return null
  }
}

export const fetchPassword = async(id)=>{
  try{
    const response = await axios.get (`${server}/password/password/${id}/`)
    console.log(response)
    return response.data
  }catch(error){
    console.error('error for fetching passwords',error)
    return null
  }
}

export const deletePassword = async(id)=>{
  try{
    const response = await axios.delete (`${server}/password/delete_password/${id}/`)
    console.log(response)
    return response

  }catch(error){
    console.error('error while delete password',error)
    return null
  }
}