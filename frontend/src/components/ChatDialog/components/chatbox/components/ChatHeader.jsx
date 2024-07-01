import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { Search, MoreVert } from '@mui/icons-material';

import HeaderMenu from './HeaderMenu';

const ChatHeader = ({ chattingAccount, conversation }) => {

    const [openOptions, setOpenOptions] = useState(false)

    const {
        activeAccounts
    } = useSelector(state => state.account)

    const url = chattingAccount?.picture

    const handleOpenOptions = () => {
        setOpenOptions((prev) => !prev)
    }

    return (
        <div className='flex h-[60px] py-[10px] px-[25px] items-center gap-[15px]'>
            <img
                src={url} alt=""
                className='w-[40px] h-[40px] object-cover rounded-[50%]'
            />
            <div className="text-white">
                <h5 className='text-[16px] font-[500] mb-[3px]'>{chattingAccount.name}</h5>
                <p className='text-[#a0abb2] text-[13px] font-[400]'>Nhắn tin cho {chattingAccount.name}</p>
            </div>
            <div className="ml-auto text-[#a0abb2] flex items-center gap-[20px]">
                <Search className='text-[28px] cursor-pointer' />
                <div className="relative">
                    <MoreVert
                        className='text-[28px] cursor-pointer'
                        onClick={handleOpenOptions}
                    />
                    {openOptions &&
                        <HeaderMenu
                            conversation={conversation}
                            setOpenOptions={setOpenOptions}
                        />}
                </div>
            </div>
        </div>
    )
}

export default ChatHeader