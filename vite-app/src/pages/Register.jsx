import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassowrd] = useState('')

//Handling registerUser
  async function registerUser(ev){
    ev.preventDefault()
    try{
      await axios.post('/register',{
        name,
        email,
        password,
      });
      alert('now login')
    }catch(e){
      alert("the eamil is already used")
    }

  }
  return (
    <div className=' mt-4 grow flex items-center justify-around'>
      <div className=' mb-64'>
      <h1 className=' text-4xl text-center mb-4'>Register</h1>
        <form className=' max-w-md mx-auto' onSubmit={registerUser}>
        <input type="text" placeholder='your name' value={name}
        onChange={ev=>setName(ev.target.value)} />
        <input type="email" placeholder='your@email.com'value={email}
        onChange={ev=>setEmail(ev.target.value)} />
        <input type="password" placeholder='password' value={password}
        onChange={ev=>setPassowrd(ev.target.value)}/>
        <button className='primary'>Register</button>
        <div className=' text-center py-2 text-gray-500'>
          Allready a mamber!    <Link className=' underline text-black ' to={'/login'} >Login Now</Link>
      
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register