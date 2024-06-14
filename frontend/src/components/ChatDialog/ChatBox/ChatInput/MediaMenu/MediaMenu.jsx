import React, { useState } from 'react'
import "./MediaMenu.scss"

import { IoDocumentText } from "react-icons/io5";
import { BiImages } from "react-icons/bi";
import { HiCamera } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { RiEmojiStickerFill } from "react-icons/ri";

const MediaMenu = () => {

    const [openPoll, setOpenPoll] = useState(false)

    const handlePollOption = () => {
        setOpenPoll(true)
    }

    return (
        <div className="input-chat-box__options">
            <div className="option">
                <IoDocumentText className='option__icon--document' />
                <span>Tài liệu</span>
            </div>
            <div className="option">
                <BiImages className='option__icon--image' />
                <span>Ảnh và video</span>
            </div>
            <div className="option">
                <HiCamera className='option__icon--camera' />
                <span>Camera</span>
            </div>
            <div className="option">
                <FaUserAlt className='option__icon--user' />
                <span>Người liên hệ</span>
            </div>
            <div
                className="option"
                onClick={handlePollOption}
            >
                <FaSquarePollHorizontal className='option__icon--poll' />
                <span>Thăm dò ý kiến</span>
            </div>
            <div className="option">
                <RiEmojiStickerFill className='option__icon--sticker' />
                <span>Nhãn dán mới</span>
            </div>
        </div>
    )
}

export default MediaMenu