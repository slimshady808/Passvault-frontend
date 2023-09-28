import axios from "axios";
import { server } from "../server";
import jwt_decode from 'jwt-decode'

export async function getAccessToken(){
  let response = localStorage.getItem('authToken')
  if (response){
    const data = JSON.parse(response)
    const accessToken=data.access;
    const payload = accessToken.split('.')[1];
    const decodedPayLoad=JSON.parse(atob(payload));
    const expirationTime = new Date(decodedPayLoad.exp * 1000);
    const currentTime=new Date();

    if(expirationTime>currentTime){
      return accessToken
    }else{
      try{
        const refreshResponse= await axios.post(`${server}/account/token/refresh/`,{
          refresh:data.refresh,
        })

        const newAccessToken =refreshResponse.data.access
        const newPayload = newAccessToken.split('.')[1];
        const newDecodedPayload= JSON.parse(atob(newPayload))
        const newExpirationTime = new Date(newDecodedPayload.exp*1000)
        const newTokenData={
          access:newAccessToken,
          refresh: data.refresh,
          exp:newExpirationTime.getTime()/1000,
        };
        localStorage.setItem('authToken',JSON.stringify(newTokenData));
        return newAccessToken
      }catch(error){
        console.error('error for refreshing token:',error)
        return null
      }
    }
  }
  return null
}

export  const  get_user_data=async()=>{
  const token= await getAccessToken()
  const decode=jwt_decode(token.access)
  return decode
}