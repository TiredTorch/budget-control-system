import React from 'react'
import './Forms.scss'

export const SignUp = () => {
  return (
    <section>
      <h2>Create an account</h2>
      <form>
        <input type="text" name='email' placeholder='Email'/>
        <input type="password" name='pass1' placeholder='Password'/>
        <input type="password" name='pass2' placeholder='Confirm password'/>
        <button>Sign up</button>
      </form>
      <span>
        Already have an account? <a href="#">Log in it!</a>
      </span>
    </section>
  )
}
