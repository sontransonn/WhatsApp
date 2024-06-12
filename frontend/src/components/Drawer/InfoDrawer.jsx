import React from 'react'
import "./InfoDrawer.scss"

import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile/Profile';

const InfoDrawer = ({ setOpenDrawer }) => {

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="info-drawer">
      <div className="info-drawer__header">
        <div className="info-drawer__header__content">
          <ArrowBack
            className='icon'
            onClick={handleClose}
          />
          <h1>Trang cá nhân</h1>
        </div>
      </div>
      <Profile />
    </div>
  )
}

export default InfoDrawer