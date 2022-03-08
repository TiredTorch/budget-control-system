import React from 'react'
import './LogIn.scss'

export const LogIn = () => {
  return (
    <section>
      <h2>Log In</h2>
      <form>
        <input type="text" name='email' placeholder='Email'/>
        <input type="password" name='pass' placeholder='Password'/>
        <button>Sign in</button>
      </form>
      <span>
        Dont have an account? <a href="#">Create it!</a>
      </span>
    </section>
  )
}
