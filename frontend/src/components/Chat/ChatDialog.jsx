import React, { useContext } from 'react';
import "./ChatDialog.scss"
import Menu from './Menu/Menu';
import EmtyChat from './EmtyChat/EmtyChat';

const ChatDialog = () => {
    return (
        <div className="messageContainer">
            <div className='chatContainer'>
                <div className="leftChat">
                    <Menu />
                </div>
                <div className="rightChat">
                    <EmtyChat />
                </div>
            </div>
        </div>
    )
}

export default ChatDialog