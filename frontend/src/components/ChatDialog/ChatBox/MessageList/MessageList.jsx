import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./MessageList.scss"

import categoriesEmoji from '../../../../constants/categoriesEmoji';

import {
    setNewMessageFlag
} from "../../../../redux/slices/messageSlice"

import EmojiPicker from 'emoji-picker-react';

import ChatInput from '../ChatInput/ChatInput'
import MessageItem from './MessageItem/MessageItem'

import newMessage from '../../../../services/message/newMessage'
import getMessages from '../../../../services/message/getMessages'

const MessageList = ({ conversation }) => {

    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const [value, setValue] = useState("");
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [openEmoji, setOpenEmoji] = useState(false)

    const scrollRef = useRef();

    const dispatch = useDispatch();
    const {
        currentAccount,
        chattingAccount
    } = useSelector(state => state.account)

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    const receiverId = conversation?.members?.find(member => member !== currentAccount.sub);

    // useEffect(() => {
    //     socket.current.on('getMessage', data => {
    //         setIncomingMessage({
    //             ...data,
    //             createdAt: Date.now()
    //         })
    //     })
    // }, []);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data);
        }
        getMessageDetails()
    }, [conversation?._id, chattingAccount._id, newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages, openEmoji]);

    // useEffect(() => {
    //     incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
    //         setMessages((prev) => [...prev, incomingMessage]);

    // }, [incomingMessage, conversation]);

    const sendText = async (e) => {
        if (!value) return;

        if (e.key === 'Enter') {
            let message = {};

            if (!file) {
                message = {
                    senderId: currentAccount.sub,
                    receiverId: receiverId,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                };
            } else {
                message = {
                    senderId: currentAccount.sub,
                    conversationId: conversation._id,
                    receiverId: receiverId,
                    type: 'file',
                    text: image
                };
            }

            //socket.current.emit('sendMessage', message);

            await newMessage(message);

            setValue('');
            setFile();
            setImage('');
            dispatch(setNewMessageFlag(!newMessageFlag));
        }
    }

    const handleEmojiClick = (e) => {
        setValue(prev => prev + e.emoji)
    }

    return (
        <div className='chat-box__box-messages'>
            <div className="chat-box__messages__box-messages">
                {
                    messages && messages.map((message, key) => (
                        <div ref={scrollRef} key={key}>
                            <MessageItem message={message} />
                        </div>
                    ))
                }
            </div>
            <div className="chat-box__box-messages__box-footer">
                {openEmoji &&
                    <EmojiPicker
                        className='emoji-container'
                        theme='dark'
                        searchPlaceholder="Tìm kiếm biểu tượng cảm xúc"
                        categories={categoriesEmoji}
                        emojiStyle='facebook'
                        onEmojiClick={handleEmojiClick}
                    />
                }
                <ChatInput
                    sendText={sendText}
                    value={value}
                    setValue={setValue}
                    setFile={setFile}
                    file={file}
                    setImage={setImage}
                    openEmoji={openEmoji}
                    setOpenEmoji={setOpenEmoji}
                />
            </div>
        </div>
    )
}

export default MessageList