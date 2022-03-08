import React, {FC, useState}  from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import auth from 'base'

export const Home : FC = () => {

  const [user, setUser] = useState<any>({});
  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login')
  }

  return (
    <section>
      <h2>Home of {user?.email}</h2>
      <button onClick={handleSignOut}>Log out</button>
    </section>
  )
}
