import React, { useContext } from 'react'
import "./Message.scss"

import { GetApp as GetAppIcon } from '@mui/icons-material';

import { AccountContext } from '../../../../../context/AccountProvider'

import formatDate from '../../../../../utils/formatDate';

const Message = ({ message }) => {
    const { account } = useContext(AccountContext);

    return (
        <div className='message'>
            {
                account.sub === message.senderId
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

export default Message