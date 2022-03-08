import React, { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from 'base';
import './Forms.scss'

export const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
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
        Dont have an account? <a href="#">Create it!</a>
      </span>
    </section>
  )
}
