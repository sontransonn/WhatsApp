import { useContext, useEffect, useState } from 'react';
import "./ConversationItem.scss"

import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';

import getConversation from '../../../services/conversation/getConversation';
import setConversation from '../../../services/conversation/setConversation';

import formatDate from '../../../utils/formatDate';

const ConversationItem = ({ user }) => {
    const [message, setMessage] = useState({});

    const { setPerson } = useContext(UserContext);
    const { account, newMessageFlag } = useContext(AccountContext);

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }

        getConversationMessage()
    }, [newMessageFlag])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    return (
        <div
            className="conversation"
            onClick={() => getUser()}
        >
            <img src={user.picture} alt="" />
            <div className="content">
                <div className="name-message">
                    <h4>{user.name}</h4>
                    {
                        message?.text &&
                        <p>{formatDate(message?.timestamp)}</p>
                    }
                </div>
                <div className="text-message">
                    <p>{message?.text?.includes('localhost') ? 'media' : message.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ConversationItem