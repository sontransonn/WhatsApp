import React, { useContext } from 'react'
import "./Profile.scss"

import EditIcon from '@mui/icons-material/Edit';

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
                <div className="info-edit">
                    <span>{account.name}</span>
                    <EditIcon className='icon' />
                </div>
            </div>
            <p className='notice'>
                Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
                hiển thị với những người liên hệ khác trên WhatsApp.
            </p>
            <div className="introduce">
                <h6>Giới thiệu</h6>
                <div className="introduce-edit">
                    <p>Xin chào! Mình đang dùng WhatsApp nè.</p>
                    <EditIcon className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Profile