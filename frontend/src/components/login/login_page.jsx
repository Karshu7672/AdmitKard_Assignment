import React, { useState } from 'react';
import server from '../../../server';
import './login.css'
import { useNavigate } from 'react-router-dom';
const loginUser = async (user,password)=>{
    const data = await  server.post('/login',{info:{
        name:user,
        pwd:password,
    }},{
        withCredentials: true,
      })    
    console.log(data)
}

export default function login(){
    const navigateTo=useNavigate();
    const [user,setUser]=useState();
    const [password,setpwd]=useState();
    return(
        <div className='login'>
        <h1>Login </h1>
        <input className='input' type='text' placeholder='username' onChange={(e)=>{
            setUser(e.target.value)
        }}></input>
        <input className='input' type='text' placeholder='password' onChange={(e)=>{
            setpwd(e.target.value)
        }}></input>
        <button  className='input' onClick={async ()=>{
           const data= await loginUser(user,password);
           navigateTo('/')
        }}>submit</button>
        </div>
    )
}