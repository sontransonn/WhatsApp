import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    setNewMessageFlag
} from "../../../../../redux/slices/messageSlice"

import {
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

import { deleteAllMessages } from '../../../../../apis/messageApi';

const HeaderMenu = ({ conversation, setOpenOptions }) => {
    const dispatch = useDispatch()

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    const handleCloseChatBox = () => {
        dispatch(setChattingAccount({}))
    }

    const handleDeleteAllMessages = async () => {
        await deleteAllMessages(conversation._id)
        dispatch(setNewMessageFlag(!newMessageFlag))
        setOpenOptions(false)
    }

    return (
        <div className='absolute top-[110%] right-0 rounded-[5px] overflow-hidden max-w-[340px] w-max bg-[#233138] py-[15px] flex flex-col'>
            <div className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity">
                <span>Thông tin liên hệ</span>
            </div>
            <div className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity">
                <span>Chọn tin nhắn</span>
            </div>
            <div
                className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity"
                onClick={handleCloseChatBox}
            >
                <span>Đóng đoạn chat</span>
            </div>
            <div className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity">
                <span>Tin nhắn tự hủy</span>
            </div>
            <div
                className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity"
                onClick={handleDeleteAllMessages}
            >
                <span>Xóa nội dung đoạn chat</span>
            </div>
            <div className="cursor-pointer py-[15px] px-[20px] text-[#beb8b1] hover:bg-blackOpacity">
                <span>Xóa đoạn chat</span>
            </div>
        </div>
    )
}

export default HeaderMenu