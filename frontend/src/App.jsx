import React from 'react'
import './App.scss'

import useAccount from './hooks/useAccount';

import ChatDialog from "./components/ChatDialog/ChatDialog"
import LoginDialog from './components/LoginDialog/LoginDialog'

import whatsapp from "./assets/images/whatsapp.webp"

function App() {

  const { currentAccount } = useAccount()

  return (
    <div className='whatsapp'>
      {
        currentAccount ?
          <div className='whatsapp__chat-container'>
            <ChatDialog />
          </div>
          :
          <div className='whatsapp__login-container'>
            <div className="whatsapp__login-container__header">
              <div className="whatsapp__login-container__header__title">
                <img src={whatsapp} alt="" />
                <h5>WHATSAPP WEB</h5>
              </div>
            </div>
            <LoginDialog />
          </div>
      }
    </div>
  )
}

export default App
