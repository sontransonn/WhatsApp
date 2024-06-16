import React, { useState } from 'react'
import "./AttachmentMenu.scss"

import { IoDocumentText } from "react-icons/io5";
import { BiImages } from "react-icons/bi";
import { HiCamera } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { RiEmojiStickerFill } from "react-icons/ri";

const AttachmentMenu = () => {

    return (
        <div className="attachmentMenu__options">
            <div className="attachmentMenu__options__item">
                <IoDocumentText className='option__iconDocument' />
                <span>Tài liệu</span>
            </div>
            <div className="attachmentMenu__options__item">
                <BiImages className='option__iconImage' />
                <span>Ảnh và video</span>
            </div>
            <div className="attachmentMenu__options__item">
                <HiCamera className='option__iconCamera' />
                <span>Camera</span>
            </div>
            <div className="attachmentMenu__options__item">
                <FaUserAlt className='option__iconUser' />
                <span>Người liên hệ</span>
            </div>
            <div className="attachmentMenu__options__item">
                <FaSquarePollHorizontal className='option__iconPoll' />
                <span>Thăm dò ý kiến</span>
            </div>
            <div className="attachmentMenu__options__item">
                <RiEmojiStickerFill className='option__iconSticker' />
                <span>Nhãn dán mới</span>
            </div>
        </div>
    )
}

export default AttachmentMenu