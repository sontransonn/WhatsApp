import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import "./HeaderChatBoxOptions.scss"

import {
    setChattingAccount
} from "../../../redux/slices/accountSlice"

const HeaderChatBoxOptions = () => {
    const dispatch = useDispatch()

    const handleCloseChatBox = () => {
        dispatch(setChattingAccount({}))
    }

    return (
        <div className='header-chat-box-options'>
            <div className="header-chat-box-options__items">
                <div className="item">
                    <span>Thông tin liên hệ</span>
                </div>
                <div className="item">
                    <span>Chọn tin nhắn</span>
                </div>
                <div
                    className="item"
                    onClick={handleCloseChatBox}
                >
                    <span>Đóng đoạn chat</span>
                </div>
                <div className="item">
                    <span>Tin nhắn tự hủy</span>
                </div>
                <div className="item">
                    <span>Xóa nội dung đoạn chat</span>
                </div>
                <div className="item">
                    <span>Xóa đoạn chat</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderChatBoxOptions