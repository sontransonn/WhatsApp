import React from 'react'
import "./InfoDrawer.scss"

import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile/Profile';

const InfoDrawer = ({ setOpenDrawer }) => {

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="drawer">
      <div className="header-drawer">
        <div className="content">
          <ArrowBack
            className='icon'
            onClick={() => setOpenDrawer(false)}
          />
          <h1>Trang cá nhân</h1>
        </div>
      </div>
      <Profile />
    </div>
  )
}

export default InfoDrawer