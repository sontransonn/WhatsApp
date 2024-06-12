import React, { useState } from 'react'
import "./ChatMenu.scss"

import HeaderChatMenu from '../HeaderChatMenu/HeaderChatMenu'
import SearchChatMenu from '../SearchChatMenu/SearchChatMenu'
import ConversationsChatMenu from '../ConversationsChatMenu/ConversationsChatMenu'

const ChatMenu = () => {

    const [text, setText] = useState('');
    const [selectOption, setSelectOption] = useState(1)

    return (
        <div className="chat-menu">
            <HeaderChatMenu />
            <SearchChatMenu
                text={text}
                setText={setText}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
            />
            <ConversationsChatMenu
                selectOption={selectOption}
                text={text}
            />
        </div>
    )
}

export default ChatMenu