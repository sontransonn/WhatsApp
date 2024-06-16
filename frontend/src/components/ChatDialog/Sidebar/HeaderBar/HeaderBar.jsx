import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./HeaderBar.scss"

import { MdOutlineGroups } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import AccountDrawer from './AccountDrawer/AccountDrawer';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderBar = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const {
        currentAccount
    } = useSelector(state => state.account)

    const handleOpenDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

    const handleOpenOptions = () => {
        setOpenOptions((prev) => !prev)
    }

    return (
        <>
            <div className='sidebarContainer__headerBar'>
                <img
                    src={currentAccount.picture}
                    alt=""
                    onClick={handleOpenDrawer}
                />
                <div className="sidebarContainer__headerBar__icons">
                    <MdOutlineGroups className='icon' />
                    <div className="sidebarContainer__headerBar__icons__menu">
                        <IoMdMore
                            className='icon'
                            onClick={handleOpenOptions}
                        />
                        {openOptions && <HeaderMenu />}
                    </div>
                </div>
            </div>

            {openDrawer && <AccountDrawer setOpenDrawer={setOpenDrawer} />}
        </>
    )
}

export default HeaderBar