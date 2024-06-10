import React, { useContext } from 'react';
import "./ChatDialog.scss"

import Menu from './Menu/Menu';
import EmtyChat from './EmtyChat/EmtyChat';
import ChatBox from './ChatBox/ChatBox';

import { UserContext } from '../../context/UserProvider';

const ChatDialog = () => {
    const { person } = useContext(UserContext);

    return (
        <div className="messageContainer">
            <div className='chatContainer'>
                <div className="leftChat">
                    <Menu />
                </div>
                <div className="rightChat">
                    {
                        Object.keys(person).length ? <ChatBox /> : <EmtyChat />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatDialog