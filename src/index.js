import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './style/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="669197203893-9js16ud4qnhcrvofkur8gubl0mn0mjfm.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);


