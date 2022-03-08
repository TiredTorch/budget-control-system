import { Layout } from 'components/layout/Layout';
import { PageNotFound } from 'components/pages/404';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './list'

export default function AppRoutes() {

  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth){
            return false;
          }
          return(
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={
                <Layout>
                  <route.component isAuth={isAuth} setIsAuth={setIsAuth}/>
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
              <PageNotFound isAuth={isAuth} setIsAuth={setIsAuth}/>
            </Layout>
          }
        />
      </Routes>
    
  )
}
