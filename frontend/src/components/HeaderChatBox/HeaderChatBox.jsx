import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import "./HeaderChatBox.scss"

import { FaCircle } from "react-icons/fa";
import { Search, MoreVert } from '@mui/icons-material';

import HeaderChatBoxOptions from './HeaderChatBoxOptions/HeaderChatBoxOptions';

const HeaderChatBox = ({ chattingAccount }) => {

    const [openOptions, setOpenOptions] = useState(false)

    const {
        activeAccounts
    } = useSelector(state => state.account)

    const url = chattingAccount?.picture

    const handleOpenOptions = () => {
        setOpenOptions((prev) => !prev)
    }

    return (
        <div className='chat-box__header'>
            <div className="chat-box__header__avatar">
                <img src={url} alt="" />
                {activeAccounts?.find(account => account.sub === chattingAccount.sub) ? <FaCircle className='icon' /> : <FaCircle className='icon--offline' />}
            </div>
            <div className="chat-box__header__name-status">
                <h5>{chattingAccount.name}</h5>
                <p>Nhắn tin cho {chattingAccount.name}</p>
            </div>
            <div className="chat-box__header__icons">
                <Search className='icon' />
                <MoreVert
                    className='icon'
                    onClick={handleOpenOptions}
                />
                {openOptions && <HeaderChatBoxOptions />}
            </div>
        </div>
    )
}

export default HeaderChatBox