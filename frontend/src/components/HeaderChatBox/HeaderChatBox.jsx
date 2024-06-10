import React, { useContext } from 'react'
import "./HeaderChatBox.scss"

import { Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from "../../context/AccountProvider"

import { defaultProfilePicture } from "../../constants/data"

const HeaderChatBox = ({ person }) => {

    const url = person?.picture || defaultProfilePicture;

    const { activeUsers } = useContext(AccountContext);

    return (
        <div className='chatHeader'>
            <img src={url} alt="" />
            <div className="status">
                <h5>{person.name}</h5>
                <h6>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</h6>
            </div>
            <div className="icons">
                <Search className='icon' />
                <MoreVert className='icon' />
            </div>
        </div>
    )
}

export default HeaderChatBox