import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./ChatInput.scss"

import {
    setNewMessageFlag
} from "../../../../redux/slices/messageSlice"

import { Mic } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { MdMood } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import AttachmentMenu from './AttachmentMenu/AttachmentMenu';

import { newMessage } from "../../../../services/apiMessage"

const ChatInput = (props) => {

    const [file, setFile] = useState(null);

    const {
        openEmoji,
        conversation,
        handleOpenEmoji,
        handleCloseEmoji,
        value,
        setValue
    } = props

    const [openOptions, setOpenOptions] = useState(false)

    const dispatch = useDispatch()
    const {
        currentAccount
    } = useSelector(state => state.account)

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    const receiverId = conversation?.members?.find(member => member !== currentAccount.sub);

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

            await newMessage(message);

            setValue('');
            dispatch(setNewMessageFlag(!newMessageFlag));
        }
    }

    return (
        <div className='chatboxContainer__chatInput'>
            {openEmoji
                &&
                <IoClose
                    className='icon'
                    onClick={handleCloseEmoji}
                />
            }
            <MdMood
                className={openEmoji ? "icon--selected" : "icon"}
                onClick={handleOpenEmoji}
            />
            <div className="chatboxContainer__chatInput__attachmentMenu">
                <AddIcon
                    className='icon'
                    onClick={() => setOpenOptions((prev) => !prev)}
                />
                {openOptions && <AttachmentMenu />}
            </div>
            <div className="chatboxContainer__chatInput__searchInput">
                <input
                    type="text"
                    placeholder='Soạn tin nhắn'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </div>
            <Mic className='icon' />
        </div>
    )
}

export default ChatInput