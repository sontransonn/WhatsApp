import React from 'react'
import { useSelector } from 'react-redux';
import "./AccountDrawer.scss"

import { ArrowBack } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const AccountDrawer = ({ setOpenDrawer }) => {

  const {
    currentAccount
  } = useSelector(state => state.account)

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="sidebarContainer__accountDrawer">
      <div className="sidebarContainer__accountDrawer__header">
        <div className="sidebarContainer__accountDrawer__header__content">
          <ArrowBack
            className='icon'
            onClick={handleClose}
          />
          <h1>Trang cá nhân</h1>
        </div>
      </div>
      <div className='sidebarContainer__accountDrawer__profile'>
        <div className="sidebarContainer__accountDrawer__profile__img">
          <img src={currentAccount.picture} alt="" />
        </div>
        <div className="sidebarContainer__accountDrawer__profile__info">
          <h6>Tên bạn</h6>
          <div className="sidebarContainer__accountDrawer__profile__info__edit">
            <span>{currentAccount.name}</span>
            <EditIcon className='icon' />
          </div>
        </div>
        <p>
          Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
          hiển thị với những người liên hệ khác trên WhatsApp.
        </p>
        <div className="sidebarContainer__accountDrawer__profile__introduce">
          <h6>Giới thiệu</h6>
          <div className="sidebarContainer__accountDrawer__profile__introduce__edit">
            <span>Xin chào! Mình đang dùng WhatsApp nè.</span>
            <EditIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDrawer