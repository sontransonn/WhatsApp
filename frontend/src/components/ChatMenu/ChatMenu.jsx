import React, { useState } from 'react'
import "./ChatMenu.scss"

import HeaderMenu from '../HeaderMenu/HeaderMenu'
import SearchMenu from '../SearchMenu/SearchMenu'
import ConversationsMenu from '../ConversationsMenu/ConversationsMenu'

const ChatMenu = () => {

    const [text, setText] = useState('');

    return (
        <div className="menu">
            <HeaderMenu />
            <SearchMenu setText={setText} />
            <ConversationsMenu text={text} />
        </div>
    )
}

export default ChatMenu