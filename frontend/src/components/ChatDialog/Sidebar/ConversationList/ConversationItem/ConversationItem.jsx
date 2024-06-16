import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ConversationItem.scss"

import {
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

import { FaChevronDown } from "react-icons/fa";

import {
    getConversation,
    setConversation
} from '../../../../../services/apiConversation';

import formatDate from '../../../../../utils/formatDate';

const ConversationItem = ({ user }) => {
    const [message, setMessage] = useState({});

    const dispatch = useDispatch();
    const {
        currentAccount
    } = useSelector(state => state.account)

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: currentAccount.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }

        getConversationMessage()
    }, [newMessageFlag])

    const getUser = async () => {
        dispatch(setChattingAccount(user));
        await setConversation({ senderId: currentAccount.sub, receiverId: user.sub });
    }

    return (
        <div
            className="conversationList__conversationItem"
            onClick={() => getUser()}
        >
            <img src={user.picture} alt="" />
            <div className="conversationList__conversationItem__content">
                <div className="conversationList__conversationItem__content__nameDate">
                    <h4>{user.name}</h4>
                    {
                        message?.text &&
                        <p>{formatDate(message?.timestamp)}</p>
                    }
                </div>
                <div className="conversationList__conversationItem__content__textMessage">
                    <p>{message?.text?.includes('localhost') ? 'media' : message.text}</p>
                    <FaChevronDown
                        className='icon'
                    />
                </div>
            </div>
        </div>
    )
}

export default ConversationItem