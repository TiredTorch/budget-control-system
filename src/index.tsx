import { Layout } from 'components/layout/Layout';
import { LogIn } from 'components/pages/LogIn';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
      <Layout>
        <LogIn/>
      </Layout>
    </React.StrictMode>,
    document.getElementById('root'),
);
