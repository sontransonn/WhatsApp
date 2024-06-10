import React, { useContext, useState, useEffect } from 'react';
import "./ChatBox.scss"

import HeaderChatBox from '../HeaderChatBox/HeaderChatBox'
import MessagesChatBox from '../MessagesChatBox/MessagesChatBox'

import { AccountContext } from "../../context/AccountProvider"
import { UserContext } from '../../context/UserProvider';

import getConversation from '../../services/conversation/getConversation';

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
            <HeaderChatBox person={person} />
            <MessagesChatBox person={person} conversation={conversation} />
        </div>
    )
}

export default ChatBox