import React, { useState } from 'react'
import "./Sidebar.scss"

import HeaderBar from './HeaderBar/HeaderBar'
import SearchBar from './SearchBar/SearchBar'
import ConversationList from './ConversationList/ConversationList'

const Sidebar = () => {

    const [text, setText] = useState('');
    const [selectOption, setSelectOption] = useState(1)

    return (
        <div className="chat-menu">
            <HeaderBar />
            <SearchBar
                text={text}
                setText={setText}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
            />
            <ConversationList
                selectOption={selectOption}
                text={text}
            />
        </div>
    )
}

export default Sidebar