import { useContext, useState } from 'react';
import "./HeaderMenu.scss"

import Groups2Icon from '@mui/icons-material/Groups2';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InfoDrawer from '../Drawer/InfoDrawer';

import { AccountContext } from "../../context/AccountProvider"

const HeaderMenu = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const handleOpenDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

    return (
        <>
            <div className='menu__header'>
                <img
                    src={account.picture}
                    alt=""
                    onClick={handleOpenDrawer}
                />
                <div className="header-icons">
                    <Groups2Icon className='icon' />
                    <DonutLargeIcon className='icon icon-small' />
                    <MapsUgcIcon className='icon icon-small' />
                    <AddCommentIcon className='icon icon-small' />
                    <MoreVertIcon className='icon' />
                </div>
            </div>

            {openDrawer && <InfoDrawer setOpenDrawer={setOpenDrawer} />}
        </>
    )
}

export default HeaderMenu