import { IAuth } from 'types/types'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound: FC<IAuth> = ({user}) => {


  return (
    <section>
      <h2>Wooops</h2>
      <p>Page not found!</p>
      <Link to={!!user ? '/home' : '/login'}>Back to main</Link>
    </section>
  )
}
