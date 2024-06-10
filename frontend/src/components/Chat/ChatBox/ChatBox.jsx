import React, { useContext, useState, useEffect } from 'react';
import "./ChatBox.scss"

import ChatHeader from './ChatHeader/ChatHeader'
import Messages from './Messages/Messages'

import { AccountContext } from "../../../context/AccountProvider"
import { UserContext } from '../../../context/UserProvider';

import getConversation from '../../../services/conversation/getConversation';

const ChatBox = () => {
    const [conversation, setConversation] = useState({});

    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }

        getConversationDetails()
    }, [person.sub])

    return (
        <div className='chatBox'>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </div>
    )
}

export default ChatBox