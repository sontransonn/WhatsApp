import React from 'react';
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
        <div className='menu__options'>
            <div
                className="menu__options__item"
            >
                Nhóm mới
            </div>
            <div
                className="menu__options__item"
            >
                Cộng đồng mới
            </div>
            <div
                className="menu__options__item"
            >
                Cộng đồng
            </div>
            <div
                className="menu__options__item"
            >
                Tin nhắn đã gắn sao
            </div>
            <div
                className="menu__options__item"
            >
                Chọn đoạn chat
            </div>
            <div
                className="menu__options__item"
            >
                Cài đặt
            </div>
            <div
                className="menu__options__item"
                onClick={handleLogout}
            >
                Đăng xuất
            </div>
            <div
                className="menu__options__item__install"
            >
                Tải WhatsApp cho Windows
            </div>
        </div>
    )
}

export default HeaderMenu