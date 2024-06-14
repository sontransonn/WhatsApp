import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

import store from './redux/store.js';

const clientId = '1048647072358-c1avosafh7k9fejeod13rsdg8bugui8m.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
  // </React.StrictMode>,
)
