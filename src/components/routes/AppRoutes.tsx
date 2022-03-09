import { Layout } from 'components/layout/Layout';
import { PageNotFound } from 'components/pages/404';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './list'

export const AppRoutes = () => {

  const [user, setUser] = useState<any>({})

  return (
      <Routes>
        {routes.map((route) => {
          if (false){
            return false;
          }
          return(
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={
                <Layout>
                  <route.component user={user} setUser={setUser}/>
                </Layout>
              }
            />
          )
        })}
        <Route
          path='*'
          key='404'
          element={
            <Layout>
              <PageNotFound user={user} setUser={setUser}/>
            </Layout>
          }
        />
      </Routes>
    
  )
}
