import React from 'react'

import { Search as SearchIcon } from '@mui/icons-material';
import { IoIosClose } from "react-icons/io";

const SearchBar = (props) => {

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
        <div className="bg-[#151d22] px-[18px] py-[10px] flex flex-col gap-[15px] border-b border-solid border-[#625f5f]">
            <div className="relative flex w-full bg-[#202c33] items-center p-[10px] rounded-[10px]">
                <SearchIcon className='text-[#9faab2]' />
                <input
                    value={text}
                    type="text"
                    placeholder={handleInputPlaceholder(selectOption)}
                    onChange={(e) => setText(e.target.value)}
                    className='ml-[20px] w-full bg-[#202c33] outline-none border-none text-[#9faab2] font-[16px] mr-[30px]'
                />
                {
                    text &&
                    <IoIosClose
                        className='text-[#9faab2] font-[25px] absolute right-[10px] cursor-pointer'
                        onClick={handleClearInputSearch}
                    />}
            </div>

            <div className="flex gap-[10px]">
                <div
                    className={`px-[15px] py-[10px] cursor-pointer font-[16px] rounded-[20px] text-[#939992] ${1 === selectOption ? "bg-[#114a49]" : "bg-[#202c33] hover:bg-[#2b3941]"}`}
                    onClick={() => handleOptionSelected(1)}
                >
                    <span>Tất cả</span>
                </div>
                <div
                    className={`px-[15px] py-[10px] cursor-pointer font-[16px] rounded-[20px] text-[#939992] ${2 === selectOption ? "bg-[#114a49]" : "bg-[#202c33] hover:bg-[#2b3941]"}`}
                    onClick={() => handleOptionSelected(2)}
                >
                    <span>Chưa đọc</span>
                </div>
                <div
                    className={`px-[15px] py-[10px] cursor-pointer font-[16px] rounded-[20px] text-[#939992] ${3 === selectOption ? "bg-[#114a49]" : "bg-[#202c33] hover:bg-[#2b3941]"}`}
                    onClick={() => handleOptionSelected(3)}
                >
                    <span>Nhóm</span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar