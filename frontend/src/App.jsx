import React from 'react'
import './App.scss'

import useAccount from './hooks/useAccount';

import ChatDialog from "./components/chatDialog/ChatDialog"
import LoginDialog from './components/loginDialog/LoginDialog'

import whatsapp from "./assets/images/whatsapp.webp"

function App() {

  const { currentAccount } = useAccount()

  return (
    <div className='min-h-screen max-h-fit bg-black relative pb-28'>
      {
        currentAccount ?
          <div className='whatsapp__chatContainer'>
            <ChatDialog />
          </div>
          :
          <div>
            <div className="h-64 bg-headerColor relative py-8">
              <div className="flex items-center gap-4 m-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
                <img
                  src={whatsapp}
                  alt=""
                  className='w-12'
                />
                <h5 className="text-white font-bold">
                  WHATSAPP WEB
                </h5>
              </div>
            </div>
            <LoginDialog />
          </div>
      }
    </div>
  )
}

export default App
