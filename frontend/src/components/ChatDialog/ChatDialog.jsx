import React from 'react';
import { useSelector } from 'react-redux';
import "./ChatDialog.scss"

import Sidebar from './Sidebar/Sidebar';
import EmptyChatBox from './EmptyChatBox/EmptyChatBox'
import ChatBox from './ChatBox/ChatBox';

const ChatDialog = () => {

    const {
        chattingAccount
    } = useSelector(state => state.account)

    return (
        <div className='chatContainer__dialog'>
            <div className="chatContainer__dialog__sidebar">
                <Sidebar />
            </div>
            <div className="chatContainer__dialog__chatbox">
                {
                    Object.keys(chattingAccount).length ? <ChatBox /> : <EmptyChatBox />
                }
            </div>
        </div>
    )
}

export default ChatDialog