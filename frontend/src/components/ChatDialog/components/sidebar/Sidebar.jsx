import React, { useState } from 'react'

import HeaderBar from './components/HeaderBar'
import SearchBar from './components/SearchBar'
import ConversationList from './components/ConversationList'

const Sidebar = () => {

    const [text, setText] = useState('');
    const [selectOption, setSelectOption] = useState(1)

    return (
        <div className="h-full relative flex flex-col">
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