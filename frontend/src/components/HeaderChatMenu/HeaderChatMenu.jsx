import { useContext, useState } from 'react';
import "./HeaderChatMenu.scss"

import { MdOutlineGroups } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import InfoDrawer from '../Drawer/InfoDrawer';
import HeaderOptions from './HeaderOptions/HeaderOptions';

import { AccountContext } from "../../context/AccountProvider"


const HeaderChatMenu = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const { account } = useContext(AccountContext);

    const handleOpenDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

    const handleOpenOptions = () => {
        setOpenOptions((prev) => !prev)
    }

    return (
        <>
            <div className='menu__header'>
                <img
                    src={account.picture}
                    alt=""
                    onClick={handleOpenDrawer}
                />
                <div className="menu__header__icons">
                    <MdOutlineGroups className='icon' />
                    <div className="menu__header__icons__options">
                        <IoMdMore
                            className='icon'
                            onClick={handleOpenOptions}
                        />
                        {openOptions && <HeaderOptions />}
                    </div>
                </div>
            </div>

            {openDrawer && <InfoDrawer setOpenDrawer={setOpenDrawer} />}
        </>
    )
}

export default HeaderChatMenu