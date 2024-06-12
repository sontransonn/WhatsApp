import React, { useState } from 'react'
import "./SearchChatMenu.scss"

import { Search as SearchIcon } from '@mui/icons-material';
import { IoIosClose } from "react-icons/io";

const SearchChatMenu = (props) => {

    const {
        text,
        setText,
        selectOption,
        setSelectOption
    } = props

    const handleOptionSelected = (optionIndex) => {
        setSelectOption(optionIndex)
    }

    const handleInputPlaceholder = (option) => {
        if (option === 1) {
            return "Tìm kiếm"
        } else if (option === 2) {
            return "Tìm kiếm đoạn chat chưa đọc"
        } else if (option === 3) {
            return "Tìm kiếm nhóm chat"
        }
    }

    const handleClearInputSearch = () => {
        setText("")
    }

    return (
        <div className="chat-menu__search">
            <div className="chat-menu__search__input">
                <SearchIcon className='chat-menu__search__input__icon' />
                <input
                    value={text}
                    type="text"
                    placeholder={handleInputPlaceholder(selectOption)}
                    onChange={(e) => setText(e.target.value)}
                />
                {
                    text &&
                    <IoIosClose
                        className='chat-menu__search__input__icon-clear'
                        onClick={handleClearInputSearch}
                    />}
            </div>

            <div className="chat-menu__search__selector">
                <div
                    className={1 === selectOption ? "chat-menu__search__selector__item--selected" : "chat-menu__search__selector__item"}
                    onClick={() => handleOptionSelected(1)}
                >
                    <span>Tất cả</span>
                </div>
                <div
                    className={2 === selectOption ? "chat-menu__search__selector__item--selected" : "chat-menu__search__selector__item"}
                    onClick={() => handleOptionSelected(2)}
                >
                    <span>Chưa đọc</span>
                </div>
                <div
                    className={3 === selectOption ? "chat-menu__search__selector__item--selected" : "chat-menu__search__selector__item"}
                    onClick={() => handleOptionSelected(3)}
                >
                    <span>Nhóm</span>
                </div>
            </div>
        </div>
    )
}

export default SearchChatMenu