import React, { useContext, useEffect, useRef, useState } from 'react'
import "./MessagesChatBox.scss"

import EmojiPicker from 'emoji-picker-react';

import Footer from '../FooterChatBox/Footer'
import Message from './MessageItem/Message'

import { AccountContext } from "../../context/AccountProvider"

import newMessage from '../../services/message/newMessage'
import getMessages from '../../services/message/getMessages'

const categories = [
    {
        category: 'suggested',
        name: 'Gần đây'
    },
    {
        category: 'smileys_people',
        name: 'Mặt cười và người'
    },
    {
        category: 'animals_nature',
        name: 'Động vật và thiên nhiên'
    },
    {
        category: 'food_drink',
        name: 'Ăn uống'
    },
    {
        category: 'travel_places',
        name: 'Du lịch và địa điểm'
    },
    {
        category: 'activities',
        name: 'Hoạt động'
    },
    {
        category: 'objects',
        name: 'Đồ dùng'
    },
    {
        category: 'symbols',
        name: 'Biểu tượng'
    },
    {
        category: 'flags',
        name: 'Cờ'
    },
]

const MessagesChatBox = ({ person, conversation }) => {

    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const [value, setValue] = useState("");
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [openEmoji, setOpenEmoji] = useState(false)

    const scrollRef = useRef();

    const {
        account,
        socket,
        newMessageFlag,
        setNewMessageFlag
    } = useContext(AccountContext);

    const receiverId = conversation?.members?.find(member => member !== account.sub);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data);
        }
        getMessageDetails()
    }, [conversation?._id, person._id, newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages, openEmoji]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);

    }, [incomingMessage, conversation]);

    const sendText = async (e) => {
        if (!value) return;

        if (e.key === 'Enter') {
            let message = {};

            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: receiverId,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                };
            } else {
                message = {
                    senderId: account.sub,
                    conversationId: conversation._id,
                    receiverId: receiverId,
                    type: 'file',
                    text: image
                };
            }

            socket.current.emit('sendMessage', message);

            await newMessage(message);

            setValue('');
            setFile();
            setImage('');
            setNewMessageFlag(prev => !prev);
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
                            <Message message={message} />
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
                        categories={categories}
                        emojiStyle='facebook'
                        onEmojiClick={handleEmojiClick}
                    />
                }
                <Footer
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

export default MessagesChatBox