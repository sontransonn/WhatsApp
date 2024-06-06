import { useState, useContext } from 'react';
import "./HeaderMenu.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { AccountContext } from "../../../../../context/AccountProvider"

const HeaderMenu = ({ className }) => {

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const {
        setAccount,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton
    } = useContext(AccountContext);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <div className='menuOptions'>
            <MoreVertIcon
                className={className}
                onClick={handleClick}
            />
            {open &&
                <div className="menu-header">
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Nhóm mới
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Cộng đồng mới
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Cộng đồng
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Tin nhắn đã gắn sao
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Chọn đoạn chat
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Cài đặt
                    </div>
                    <div
                        className="item"
                        onClick={handleClose}
                    >
                        Đăng xuất
                    </div>
                    <div
                        className="install"
                        onClick={handleClose}
                    >
                        Tải WhatsApp cho Windows
                    </div>
                </div>
            }
        </div>
    )
}

export default HeaderMenu