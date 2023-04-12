import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function HandleUserSubmit(ev){
    ev.preventDefault()
    try{
      await axios.post('/login',{
        email,
        password,
      });
      alert('login succ')
    }catch(e){
      alert("login failed")
    }

  }
  return (
    <div className=' mt-4 grow flex items-center justify-around'>
      <div className=' mb-64'>
      <h1 className=' text-4xl text-center mb-4'>login</h1>
        <form className=' max-w-md mx-auto' onSubmit={HandleUserSubmit}>
        <input type="email" placeholder='your@email.com' value={email} onChange={(ev)=>{setEmail(ev.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} />
        <button className='primary'>Login</button>
        <div className=' text-center py-2 text-gray-500'>
          Don't have an account yet!    <Link className=' underline text-black ' to={'/register'} >Register Now</Link>
      
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login