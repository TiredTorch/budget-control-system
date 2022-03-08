import { Layout } from 'components/layout/Layout';
import { Home } from 'components/pages/Home';
import { LogIn } from 'components/pages/LogIn';
import { SignUp } from 'components/pages/SignUp';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
      <Layout>
        <SignUp/>
        <LogIn />
        <Home />
      </Layout>
    </React.StrictMode>,
    document.getElementById('root'),
);
