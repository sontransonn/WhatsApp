import React from 'react'
import "./Search.scss"

import { Search as SearchIcon } from '@mui/icons-material';

const Search = ({ setText }) => {
    return (
        <div className="search-menu">
            <div className="search-input">
                <SearchIcon className='icon' />
                <input
                    type="text"
                    placeholder='Tìm kiếm'
                    className='input'
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="selector">
                <div className="select-item">
                    <span>Tất cả</span>
                </div>
                <div className="select-item">
                    <span>Chưa đọc</span>
                </div>
                <div className="select-item">
                    <span>Nhóm</span>
                </div>
            </div>
        </div>
    )
}

export default Search