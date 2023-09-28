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