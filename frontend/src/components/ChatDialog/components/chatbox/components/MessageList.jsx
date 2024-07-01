import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

import MessageItem from './MessageItem'

import { getMessages } from '../../../../../apis/messageApi'

const MessageList = ({ conversation, openEmoji }) => {

    const [messages, setMessages] = useState([]);

    const scrollRef = useRef();

    const {
        chattingAccount
    } = useSelector(state => state.account)

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data);
        }
        getMessageDetails()
    }, [conversation?._id, chattingAccount._id, newMessageFlag])

    console.log(newMessageFlag);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages, openEmoji]);

    return (
        <div className='bg-bgImg bg-cover flex-1 flex flex-col py-[10px] px-[50px] gap-[3px] overflow-scroll max-lg:py-[10px] max-lg:px-[50px]'>
            {
                messages && messages.map((message, key) => (
                    <div
                        ref={scrollRef}
                        key={key}
                        className='chatboxContainer__messageList__messageItemContainer'
                    >
                        <MessageItem message={message} />
                    </div>
                ))
            }
        </div>
    )
}

export default MessageList