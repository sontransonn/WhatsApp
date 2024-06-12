import React, { useContext } from 'react'
import "./HeaderChatBoxOptions.scss"

import { UserContext } from "../../../context/UserProvider"

const HeaderChatBoxOptions = () => {

    const { setPerson } = useContext(UserContext)

    const handleCloseChatBox = () => {
        setPerson({})
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