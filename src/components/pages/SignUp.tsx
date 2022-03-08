import auth from 'base';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import './Forms.scss'

export const SignUp = () => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
        Already have an account? <a href="#">Log in it!</a>
      </span>
    </section>
  )
}
