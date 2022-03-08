import React, { FC, useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from 'base';
import './Forms.scss'
import { IAuth } from 'types/types';

export const LogIn : FC<IAuth> = ({setIsAuth}) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/home');
      setIsAuth(true);

    } catch (error) {
      alert(error);
    }
  }

  return (
    <section>
      <h2>Log In</h2>
      <div>
      <input 
          type="text" 
          placeholder='Email'
          onChange={(e) => {setLoginEmail(e.target.value)}}
        />
        <input 
          type="password" 
          placeholder='Password'
          onChange={(e) => {setLoginPassword(e.target.value)}}
        />
        <button onClick={handleSignIn}>Sign in</button>
      </div>
      <span>
        Dont have an account? <Link to='/register'>Create it!</Link>
      </span>
    </section>
  )
}
