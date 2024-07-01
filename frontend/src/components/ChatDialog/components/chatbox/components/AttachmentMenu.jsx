import React from 'react'

import { IoDocumentText } from "react-icons/io5";
import { BiImages } from "react-icons/bi";
import { HiCamera } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { RiEmojiStickerFill } from "react-icons/ri";

const AttachmentMenu = () => {

    return (
        <div className="absolute left-0 bottom-[140%] bg-[#233138] py-[10px] px-[8px] rounded-[20px] flex flex-col w-[220px] z-20">
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <IoDocumentText className='text-[28px] text-[#7f66ff]' />
                <span>Tài liệu</span>
            </div>
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <BiImages className='text-[28px] text-[#007bfc]' />
                <span>Ảnh và video</span>
            </div>
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <HiCamera className='text-[28px] text-[#ff2e74]' />
                <span>Camera</span>
            </div>
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <FaUserAlt className='text-[28px] text-[#009de2]' />
                <span>Người liên hệ</span>
            </div>
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <FaSquarePollHorizontal className='text-[28px] text-[#ffbc38]' />
                <span>Thăm dò ý kiến</span>
            </div>
            <div className="py-[10px] px-[10px] cursor-pointer rounded-[10px] text-[#c5cbcf] text-[16px] flex items-center gap-[10px] hover:bg-blackOpacity">
                <RiEmojiStickerFill className='text-[28px] text-[#02a698]' />
                <span>Nhãn dán mới</span>
            </div>
        </div>
    )
}

export default AttachmentMenu