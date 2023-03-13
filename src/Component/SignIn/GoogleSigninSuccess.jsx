import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function GoogleSigninSuccess(props) {
    const navigate = useNavigate()

    
    useEffect(() => {
      axios.get('https://ecocharge-backend-3ms8.onrender.com/auth/login/success',{
        withCredentials:true
      }).then(res=>{
console.log(res.data);
        localStorage.setItem("userToken",res.data.token)
        props.saveUserData()
        // navigate('/nearestStation')
        navigate('/')

      }).catch(err=>console.log(err))
    
}, [props,navigate])
    
  return (
    <div>GoogleSigninSuccess</div>
  )
}
