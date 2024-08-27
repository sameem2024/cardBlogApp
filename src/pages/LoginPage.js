import { useContext, useState } from "react"
import { context } from "../context/Global";



const LoginPage = () => {
  const {handleLogin} = useContext(context);
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');

  

  return (

   
    <div className='h-[calc(100vh-50px)] font-Josefin flex flex-col items-center justify-center bg-login bg-cover'>
        <span className='text-4xl'>Login</span>
        <form className='mt-[20px] flex flex-col'>
            <label htmlFor='name' className='labelstyle'>Email</label>
            <input
                type='text'
                placeholder='Enter your email'
                value={userName}
                className='inputstyle'
                onChange={(e)=>setUserName(e.target.value)}
            />

            <label htmlFor='pass' className='labelstyle'>Password</label>
            <input
                type='password'
                placeholder='Enter your password'
                value = {password}
                className='inputstyle'
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button className='mt-[25px] bg-pink-400 rounded-xl text-center cursor-pointer'
                onClick={(e) => handleLogin(e,userName,password)}>
                Login
            </button>
        </form>

      {/* <button className='absolute top-[10%] right-[60px] bg-teal-400 text-white p-[10px] rounded-xl text-center cursor-pointer'>Register</button> */}
    </div>
  )

}

export default LoginPage