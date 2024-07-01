import React from 'react';
import { useDispatch } from 'react-redux';

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
        <div className='absolute w-[250px] right-0 top-[115%] bg-[#233138] py-[10px] rounded-[5px] flex flex-col z-10'>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Nhóm mới
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Cộng đồng mới
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Cộng đồng
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Tin nhắn đã gắn sao
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Chọn đoạn chat
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Cài đặt
            </div>
            <div
                className="text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
                onClick={handleLogout}
            >
                Đăng xuất
            </div>
            <div
                className="border-t border-solid border-[#626060] text-[#beb8b1] cursor-pointer py-[15px] px-[25px] hover:bg-blackOpacity"
            >
                Tải WhatsApp cho Windows
            </div>
        </div>
    )
}

export default HeaderMenu