import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import "./MessageItem.scss"

import formatDate from '../../../../../utils/formatDate';

const MessageItem = ({ message }) => {

    const {
        currentAccount,
    } = useSelector(state => state.account)

    return (
        <div className='message'>
            {
                currentAccount.sub === message.senderId
                    ?
                    <div className="sender">
                        <p className='text'>{message.text}</p>
                        <p className='time'>{formatDate(message.createdAt)}</p>
                    </div>
                    :
                    <div className="receiver">
                        <p className='text'>{message.text}</p>
                        <p className='time'>{formatDate(message.createdAt)}</p>
                    </div>
            }
        </div>
    )
}

export default MessageItem