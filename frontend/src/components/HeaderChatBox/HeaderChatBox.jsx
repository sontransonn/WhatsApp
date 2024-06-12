import React, { useContext, useState } from 'react'
import "./HeaderChatBox.scss"

import { Search, MoreVert } from '@mui/icons-material';

import HeaderChatBoxOptions from './HeaderChatBoxOptions/HeaderChatBoxOptions';

import { AccountContext } from "../../context/AccountProvider"

import { defaultProfilePicture } from "../../constants/data"

const HeaderChatBox = ({ person }) => {

    const [openOptions, setOpenOptions] = useState(false)

    const url = person?.picture || defaultProfilePicture;

    const { activeUsers } = useContext(AccountContext);

    const handleOpenOptions = () => {
        setOpenOptions((prev) => !prev)
    }

    return (
        <div className='chat-box__header'>
            <img src={url} alt="" />
            <div className="chat-box__header__name-status">
                <h5>{person.name}</h5>
                <h6>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</h6>
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