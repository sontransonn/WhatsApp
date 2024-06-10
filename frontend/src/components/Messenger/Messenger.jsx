import React, { useContext } from 'react'
import "./Messenger.scss"

import { AccountContext } from '../../context/AccountProvider'

import ChatDialog from '../Chat/ChatDialog'
import LoginDialog from '../Account/LoginDialog'

import whatsapp from "../../assets/images/whatsapp.webp"

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <div className="messenger">
            {
                account ?
                    <>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <div className="login_header">
                            <div className="login_header-title">
                                <img src={whatsapp} alt="" />
                                <h5>WHATSAPP WEB</h5>
                            </div>
                        </div>
                        <LoginDialog />
                    </>
            }
        </div>
    )
}

export default Messenger