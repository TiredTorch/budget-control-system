import auth from 'base';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IAuth } from 'types/types';
import './Forms.scss'

export const SignUp : FC<IAuth> = ({setIsAuth}) => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      navigate('/home')
      setIsAuth(true);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <section>
      <h2>Create an account</h2>
      <div>
        <input 
          type="text" 
          placeholder='Email'
          onChange={(e) => {setRegisterEmail(e.target.value)}}
        />
        <input 
          type="password" 
          placeholder='Password'
          onChange={(e) => {setRegisterPassword(e.target.value)}}
        />
        <button onClick={handleSignUp}>Sign up</button>
      </div>
      <span>
        Already have an account? <Link to="/login">Log in it!</Link>
      </span>
    </section>
  )
}
