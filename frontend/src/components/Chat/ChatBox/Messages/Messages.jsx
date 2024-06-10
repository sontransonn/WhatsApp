import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Messages.scss"

import Footer from './Footer/Footer'
import Message from './Message/Message'

import { AccountContext } from "../../../../context/AccountProvider"

import newMessage from '../../../../services/message/newMessage'
import getMessages from '../../../../services/message/getMessages'

const Messages = ({ person, conversation }) => {

    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const [value, setValue] = useState();
    const [file, setFile] = useState();
    const [image, setImage] = useState();

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
    }, [messages]);

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

    return (
        <div className='messages'>
            <div className="list-message">
                {
                    messages && messages.map(message => (
                        <div className="container-message" ref={scrollRef}>
                            <Message message={message} />
                        </div>
                    ))
                }
            </div>
            <Footer
                sendText={sendText}
                value={value}
                setValue={setValue}
                setFile={setFile}
                file={file}
                setImage={setImage}
            />
        </div>
    )
}

export default Messages