import { AppRoutes } from 'components/routes/AppRoutes';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
