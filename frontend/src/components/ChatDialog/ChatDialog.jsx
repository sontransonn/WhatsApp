import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './components/sidebar/Sidebar';
import EmptyChatBox from './components/EmptyChatBox'
import ChatBox from './components/chatbox/ChatBox';

const ChatDialog = () => {

    const {
        chattingAccount
    } = useSelector(state => state.account)

    return (
        <div className='w-full h-full flex m-auto bg-[#222e35]'>
            <div className="min-w-[340px] w-[33%]">
                <Sidebar />
            </div>
            <div className="min-w-[400px] w-[77%] h-full border-l border-solid border-l-[#474646]">
                {
                    Object.keys(chattingAccount).length ? <ChatBox /> : <EmptyChatBox />
                }
            </div>
        </div>
    )
}

export default ChatDialog