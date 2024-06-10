import React, { useContext } from 'react';
import "./ChatDialog.scss"

import ChatMenu from '../ChatMenu/ChatMenu';
import EmptyChatBox from '../ChatBox/EmptyChatBox/EmptyChatBox';
import ChatBox from '../ChatBox/ChatBox';

import { UserContext } from '../../context/UserProvider';

const ChatDialog = () => {
    const { person } = useContext(UserContext);

    return (
        <div className="chat__dialog">
            <div className='chat__dialog__container'>
                <div className="container__chatmenu">
                    <ChatMenu />
                </div>
                <div className="container__chatbox">
                    {
                        Object.keys(person).length ? <ChatBox /> : <EmptyChatBox />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatDialog