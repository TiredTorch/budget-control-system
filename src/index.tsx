import { Layout } from 'components/layout/Layout';
import { SignUp } from 'components/pages/SignUp';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
      <Layout>
        <SignUp/>
      </Layout>
    </React.StrictMode>,
    document.getElementById('root'),
);
