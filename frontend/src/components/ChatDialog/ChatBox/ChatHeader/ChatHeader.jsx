import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./ChatHeader.scss"

import { FaCircle } from "react-icons/fa";
import { Search, MoreVert } from '@mui/icons-material';

import HeaderMenu from './HeaderMenu/HeaderMenu';

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
        <div className='chatboxContainer__chatHeader'>
            <div className="chatboxContainer__chatHeader__avatar">
                <img src={url} alt="" />
                {activeAccounts?.find(account => account.sub === chattingAccount.sub) ? <FaCircle className='icon' /> : <FaCircle className='icon--offline' />}
            </div>
            <div className="chatboxContainer__chatHeader__name">
                <h5>{chattingAccount.name}</h5>
                <p>Nhắn tin cho {chattingAccount.name}</p>
            </div>
            <div className="chatboxContainer__chatHeader__icons">
                <Search className='icon' />
                <div className="chatboxContainer__chatHeader__icons__menu">
                    <MoreVert
                        className='icon'
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