import React from 'react'
import { useSelector } from 'react-redux';
import "./InfoDrawer.scss"

import { ArrowBack } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const InfoDrawer = ({ setOpenDrawer }) => {

  const {
    currentAccount
  } = useSelector(state => state.account)

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
      <div className='profile'>
        <div className="profile__img">
          <img src={currentAccount.picture} alt="" />
        </div>
        <div className="profile__info">
          <h6>Tên bạn</h6>
          <div className="profile__info__edit">
            <span>{currentAccount.name}</span>
            <EditIcon className='profile__info__edit__icon' />
          </div>
        </div>
        <p className='profile__notice'>
          Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
          hiển thị với những người liên hệ khác trên WhatsApp.
        </p>
        <div className="profile__introduce">
          <h6>Giới thiệu</h6>
          <div className="profile__introduce__edit">
            <p>Xin chào! Mình đang dùng WhatsApp nè.</p>
            <EditIcon className='profile__introduce__edit__icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDrawer