import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { MdOutlineGroups } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import AccountDrawer from './AccountDrawer';
import HeaderMenu from './HeaderMenu';

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
            <div className='h-[60px] flex py-[10px] px-[18px] items-center justify-between'>
                <img
                    src={currentAccount.picture}
                    alt=""
                    onClick={handleOpenDrawer}
                    className='h-[40px] w-[40px] rounded-[50%] cursor-pointer'
                />
                <div className="flex gap-[30px] items-center justify-between">
                    <MdOutlineGroups className='text-[#9faab2] text-[30px] cursor-pointer' />
                    <div className="relative flex items-center">
                        <IoMdMore
                            className='text-[#9faab2] text-[30px] cursor-pointer'
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