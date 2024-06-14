import React from 'react';
import { useSelector } from 'react-redux';
import "./ChatDialog.scss"

import Sidebar from './Sidebar/Sidebar';
import EmptyChatBox from './ChatBox/EmptyChatBox/EmptyChatBox';
import ChatBox from './ChatBox/ChatBox';

const ChatDialog = () => {

    const {
        chattingAccount
    } = useSelector(state => state.account)

    return (
        <div className="chat-container__dialog">
            <div className='chat-dialog__container'>
                <div className="chat-dialog__container__chatmenu">
                    <Sidebar />
                </div>
                <div className="chat-dialog__container__chatbox">
                    {
                        Object.keys(chattingAccount).length ? <ChatBox /> : <EmptyChatBox />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatDialog