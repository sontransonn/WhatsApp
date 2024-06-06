import React from 'react'
import "./Menu.scss"

import Header from './Header/Header'
import Search from './Search/Search'

const Menu = () => {
    return (
        <div className="menu">
            <Header />
            <Search />
        </div>
    )
}

export default Menu