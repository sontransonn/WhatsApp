import React, { useContext } from 'react'
import "./Profile.scss"

import { AccountContext } from '../../../context/AccountProvider';

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <div className='profile'>
            <div className="img-container">
                <img src={account.picture} alt="" />
            </div>
            <div className="info">
                <h6>Tên bạn</h6>
                <span>{account.name}</span>
            </div>
            <p className='notice'>
                Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
                hiển thị với những người liên hệ khác trên WhatsApp.
            </p>
            <div className="introduce">
                <h6>Giới thiệu</h6>
                <p>Xin chào! Mình đang dùng WhatsApp nè.</p>
            </div>
        </div>
    )
}

export default Profile