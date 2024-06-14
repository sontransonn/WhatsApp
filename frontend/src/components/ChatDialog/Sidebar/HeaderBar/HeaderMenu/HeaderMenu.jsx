import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./HeaderMenu.scss"

import {
    setCurrentAccount,
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

const HeaderMenu = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setCurrentAccount(null))
        dispatch(setChattingAccount({}))
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

export default HeaderMenu