import React from 'react'
import { useSelector } from 'react-redux';

import formatDate from '../../../../../utils/formatDate';

const MessageItem = ({ ref, message, key }) => {

    const {
        currentAccount,
    } = useSelector(state => state.account)

    return (
        <div
            className='flex text-white w-full'
        >
            {
                currentAccount.sub === message.senderId
                    ?
                    <div className="bg-[#005c4b] p-[10px] rounded-[8px] flex ml-auto max-w-[60&]">
                        <p className='text-[14px] pr-[25px] pl-[5px]'>{message.text}</p>
                        <span className='text-[10px] text-[#919191] break-keep mt-auto'>{formatDate(message.createdAt)}</span>
                    </div>
                    :
                    <div className="bg-[#202c33] p-[10px] rounded-[8px] flex">
                        <p className='text-[14px] pr-[25px] pl-[5px]'>{message.text}</p>
                        <span className='text-[10px] text-[#919191] break-keep mt-auto'>{formatDate(message.createdAt)}</span>
                    </div>
            }
        </div>
    )
}

export default MessageItem