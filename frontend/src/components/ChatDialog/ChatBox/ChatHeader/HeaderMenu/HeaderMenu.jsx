import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./HeaderMenu.scss"

import {
    setNewMessageFlag
} from "../../../../../redux/slices/messageSlice"

import {
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

import { deleteAllMessages } from '../../../../../services/apiMessage';

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
        <div className='menu__menuOptions'>
            <div className="menu__menuOptions__item">
                <span>Thông tin liên hệ</span>
            </div>
            <div className="menu__menuOptions__item">
                <span>Chọn tin nhắn</span>
            </div>
            <div
                className="menu__menuOptions__item"
                onClick={handleCloseChatBox}
            >
                <span>Đóng đoạn chat</span>
            </div>
            <div className="menu__menuOptions__item">
                <span>Tin nhắn tự hủy</span>
            </div>
            <div
                className="menu__menuOptions__item"
                onClick={handleDeleteAllMessages}
            >
                <span>Xóa nội dung đoạn chat</span>
            </div>
            <div className="menu__menuOptions__item">
                <span>Xóa đoạn chat</span>
            </div>
        </div>
    )
}

export default HeaderMenu