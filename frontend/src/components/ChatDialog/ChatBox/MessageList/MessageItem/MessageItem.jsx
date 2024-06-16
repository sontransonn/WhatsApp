import React from 'react'
import { useSelector } from 'react-redux';
import "./MessageItem.scss"

import formatDate from '../../../../../utils/formatDate';

const MessageItem = ({ ref, message, key }) => {

    const {
        currentAccount,
    } = useSelector(state => state.account)

    return (
        <div
            className='messageItemContainer__messageItem'
        >
            {
                currentAccount.sub === message.senderId
                    ?
                    <div className="messageItem__sender">
                        <p>{message.text}</p>
                        <span>{formatDate(message.createdAt)}</span>
                    </div>
                    :
                    <div className="messageItem__receiver">
                        <p>{message.text}</p>
                        <span>{formatDate(message.createdAt)}</span>
                    </div>
            }
        </div>
    )
}

export default MessageItem