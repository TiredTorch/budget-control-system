import React, { FC } from 'react'
import './Layout.scss'

export const Layout : FC = ({children}) => {
  return (
    <>
      <header>
        <h1>Budget Controlling System</h1>
      </header>
      {children}
    </>
  )
}
