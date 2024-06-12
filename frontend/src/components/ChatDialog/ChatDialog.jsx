import React, { useContext } from 'react';
import "./ChatDialog.scss"

import ChatMenu from '../ChatMenu/ChatMenu';
import EmptyChatBox from '../ChatBox/EmptyChatBox/EmptyChatBox';
import ChatBox from '../ChatBox/ChatBox';

import { UserContext } from '../../context/UserProvider';

const ChatDialog = () => {
    const { person } = useContext(UserContext);

    return (
        <div className="chat-dialog">
            <div className='chat-dialog__container'>
                <div className="chat-dialog__container__chatmenu">
                    <ChatMenu />
                </div>
                <div className="chat-dialog__container__chatbox">
                    {
                        Object.keys(person).length ? <ChatBox /> : <EmptyChatBox />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatDialog