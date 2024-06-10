import React, { useState } from 'react'
import "./Menu.scss"

import Header from './Header/Header'
import Search from './Search/Search'
import Conversations from './Conversations/Conversations'

const Menu = () => {

    const [text, setText] = useState('');

    return (
        <div className="menu">
            <Header />
            <Search setText={setText} />
            <Conversations text={text} />
        </div>
    )
}

export default Menu