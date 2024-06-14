import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./ChatBox.scss"

import HeaderChatBox from '../HeaderChatBox/HeaderChatBox'
import MessagesChatBox from '../MessagesChatBox/MessagesChatBox'

import getConversation from '../../services/conversation/getConversation';

const ChatBox = () => {
    const [conversation, setConversation] = useState({});

    const {
        currentAccount,
        chattingAccount
    } = useSelector(state => state.account)

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: currentAccount.sub, receiverId: chattingAccount.sub });
            setConversation(data);
        }

        getConversationDetails()
    }, [chattingAccount.sub])

    return (
        <div className='chat-box'>
            <HeaderChatBox chattingAccount={chattingAccount} />
            <MessagesChatBox
                conversation={conversation}
            />
        </div>
    )
}

export default ChatBox