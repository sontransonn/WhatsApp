import { useContext, useState } from 'react';
import "./Header.scss"

import Groups2Icon from '@mui/icons-material/Groups2';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import InfoDrawer from '../../../Drawer/InfoDrawer';

import { AccountContext } from "../../../../context/AccountProvider"

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const handleOpenDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

    return (
        <>
            <div className='header-menu'>
                <img
                    src={account.picture}
                    alt=""
                    onClick={handleOpenDrawer}
                />
                <div className="icons">
                    <Groups2Icon className='icon' />
                    <HeaderMenu className="icon" />
                </div>
            </div>

            {openDrawer && <InfoDrawer setOpenDrawer={setOpenDrawer} />}
        </>
    )
}

export default Header