import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import AccountProvider from './context/AccountProvider.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '1048647072358-c1avosafh7k9fejeod13rsdg8bugui8m.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <App />
      </AccountProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
