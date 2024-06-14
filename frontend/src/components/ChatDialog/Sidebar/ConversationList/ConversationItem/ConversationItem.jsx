import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ConversationItem.scss"

import {
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

import { FaChevronDown } from "react-icons/fa";

import getConversation from '../../../../../services/conversation/getConversation';
import setConversation from '../../../../../services/conversation/setConversation';

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
            className="conversation-item"
            onClick={() => getUser()}
        >
            <img src={user.picture} alt="" />
            <div className="conversation-item__content">
                <div className="conversation-item__content__name-date">
                    <h4>{user.name}</h4>
                    {
                        message?.text &&
                        <p>{formatDate(message?.timestamp)}</p>
                    }
                </div>
                <div className="conversation-item__content__text-message">
                    <p>{message?.text?.includes('localhost') ? 'media' : message.text}</p>
                    <FaChevronDown
                        className='conversation-item__content__text-message__icon'
                    />
                </div>
            </div>
        </div>
    )
}

export default ConversationItem