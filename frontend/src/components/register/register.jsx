import React, { useState } from 'react';
import server from '../../../server';
import { useNavigate } from 'react-router-dom';


const register_user = async (user,password)=>{
    const data = await  server.post('/register',{info:{
        name:user,
        pwd:password,
    }})    
    console.log(data)
}

export default function Register(){

    const [user,setUser]=useState();
    const [password,setpwd]=useState();
    const navigateTo=useNavigate();
    return(
        <div className='login'>
        <h1>Register</h1>
        <input className='input' type='text' onChange={(e)=>{
            setUser(e.target.value)
        }}></input>
        <input className='input' type='text' onChange={(e)=>{
            setpwd(e.target.value)
        }}></input>
        <button className='input' onClick={async ()=>{
            const data = await register_user(user,password);
            navigateTo('/')
        }}>submit</button>
        </div>
    )
}