import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    setNewMessageFlag
} from "../../../../../redux/slices/messageSlice"

import { Mic } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { MdMood } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import AttachmentMenu from './AttachmentMenu';

import { newMessage } from "../../../../../apis/messageApi"

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
        <div className='h-[65px] bg-[#202c33] flex items-center py-[10px] px-[25px] gap-[15px] relative'>
            {openEmoji
                &&
                <IoClose
                    className='text-[#8696a0] text-[30px] cursor-pointer'
                    onClick={handleCloseEmoji}
                />
            }
            <MdMood
                className={openEmoji ? "text-[#017d67] text-[30px] cursor-pointer" : "text-[#8696a0] text-[30px] cursor-pointer"}
                onClick={handleOpenEmoji}
            />
            <div className="relative flex items-center">
                <AddIcon
                    className='text-[#8696a0] text-[30px] cursor-pointer'
                    onClick={() => setOpenOptions((prev) => !prev)}
                />
                {openOptions && <AttachmentMenu />}
            </div>
            <div className="flex-1 self-stretch">
                <input
                    type="text"
                    placeholder='Soạn tin nhắn'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                    className='w-full h-full outline-none border-none rounded-[10px] px-[20px] bg-[#354149] text-white text-[16px]'
                />
            </div>
            <Mic className='text-[#8696a0] text-[30px] cursor-pointer' />
        </div>
    )
}

export default ChatInput