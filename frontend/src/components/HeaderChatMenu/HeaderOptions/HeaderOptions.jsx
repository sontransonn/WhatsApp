import { useState, useContext } from 'react';
import "./HeaderOptions.scss"

import { UserContext } from '../../../context/UserProvider';
import { AccountContext } from "../../../context/AccountProvider"

const HeaderOptions = () => {

    const {
        setAccount,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton
    } = useContext(AccountContext);

    const { setPerson } = useContext(UserContext)

    const handleLogout = () => {
        setAccount(null)
        setPerson({})
        localStorage.removeItem("user")
    }

    return (
        <div className='menu-options'>
            <div
                className="menu-options__item"
            >
                Nhóm mới
            </div>
            <div
                className="menu-options__item"
            >
                Cộng đồng mới
            </div>
            <div
                className="menu-options__item"
            >
                Cộng đồng
            </div>
            <div
                className="menu-options__item"
            >
                Tin nhắn đã gắn sao
            </div>
            <div
                className="menu-options__item"
            >
                Chọn đoạn chat
            </div>
            <div
                className="menu-options__item"
            >
                Cài đặt
            </div>
            <div
                className="menu-options__item"
                onClick={handleLogout}
            >
                Đăng xuất
            </div>
            <div
                className="menu-options__item--install"
            >
                Tải WhatsApp cho Windows
            </div>
        </div>
    )
}

export default HeaderOptions