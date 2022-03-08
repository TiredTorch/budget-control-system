import React, {useState}  from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import auth from 'base'

export const Home = () => {

  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleSignOut = async () => {
    await signOut(auth);
  }

  return (
    <section>
      <h2>Home of {user?.email}</h2>
      <button onClick={handleSignOut}>Log out</button>
    </section>
  )
}
