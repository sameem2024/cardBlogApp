import React, { useContext, useState } from 'react'
import { context } from '../context/Global';

const RegisterPage = () => {
    const {handleUser} = useContext(context);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className='h-[calc(100vh-50px)] font-Josefin flex flex-col items-center justify-center bg-register bg-cover'>
        <span className='text-6xl'>Register</span>
        <form className='mt-[20px] flex flex-col'>

            <label className='labelstyle'>Username</label>
            <input 
                type='text'
                placeholder='Enter name'
                className='inputstyle'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <label className='labelstyle'>Email</label>
            <input 
                type='email'
                placeholder='Enter Email'
                className='inputstyle'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <label className='labelstyle'>Password</label>
            <input 
                type='password'
                placeholder='Enter password'
                className='inputstyle'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button className='mt-[25px] bg-teal-400 text-white p-[10px] border-0 
                rounded-xl text-center cursor-pointer'
                onClick={handleUser}>
                Register
            </button>

        </form>
       {/*  <button className='absolute top-[10%] right-[20px] bg-pink-300 text-white rounded-xl border-0 cursor-pointer'>Login</button> */}
    </div>
  )
}

export default RegisterPage