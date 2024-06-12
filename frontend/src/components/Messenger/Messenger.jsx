import React, { useContext } from 'react'
import "./Messenger.scss"

import ChatDialog from '../ChatDialog/ChatDialog'
import LoginDialog from '../LoginDialog/LoginDialog'

import { AccountContext } from '../../context/AccountProvider'

import whatsapp from "../../assets/images/whatsapp.webp"

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <div className="messenger">
            {
                account ?
                    <div className='messenger__chat'>
                        <ChatDialog />
                    </div>
                    :
                    <div className='messenger__login'>
                        <div className="messenger__login__header">
                            <div className="messenger__login__header__title">
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

export default Messenger