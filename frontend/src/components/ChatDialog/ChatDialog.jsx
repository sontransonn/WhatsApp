import React from 'react';
import { useSelector } from 'react-redux';
import "./ChatDialog.scss"

import ChatMenu from '../ChatMenu/ChatMenu';
import EmptyChatBox from '../ChatBox/EmptyChatBox/EmptyChatBox';
import ChatBox from '../ChatBox/ChatBox';

const ChatDialog = () => {

    const {
        chattingAccount
    } = useSelector(state => state.account)

    return (
        <div className="chat-dialog">
            <div className='chat-dialog__container'>
                <div className="chat-dialog__container__chatmenu">
                    <ChatMenu />
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