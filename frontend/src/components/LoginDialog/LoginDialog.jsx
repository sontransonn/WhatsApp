import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./LoginDialog.scss"

import {
    setCurrentAccount
} from "../../redux/slices/accountSlice"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import addUser from '../../services/user/addUser';

import qrCodeImage from '../../assets/images/qrcode.jpg';
import imageEmpty from "../../assets/images/imageEmpty.png"
import instructionVideo from "../../assets/videos/instruction.mp4"

const LoginDialog = () => {
    const dispatch = useDispatch();

    const onLoginSuccess = async (res) => {
        let decoded = jwtDecode(res.credential);
        dispatch(setCurrentAccount(decoded))
        localStorage.setItem("user", JSON.stringify(decoded))
        await addUser(decoded);
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div className="whatsapp__login-container__dialog">
            <div className="whatsapp__login-container__dialog__container">
                <div className="whatsapp__login-container__dialog__container__header">
                    <img src={imageEmpty} alt="" />
                    <div className="whatsapp__login-container__dialog__container__header__content">
                        <h4>Tải xuống WhatsApp cho Windows</h4>
                        <p>
                            Tận hưởng tính năng gọi điện, chia sẻ màn hình và
                            trải nghiệm nhanh hơn với ứng dụng cho Windows mới.
                        </p>
                    </div>
                    <button>
                        Tải ứng dụng
                    </button>
                </div>
                <div className="whatsapp__login-container__dialog__container__body">
                    <div className="whatsapp__login-container__dialog__container__body__content">
                        <h4>Sử dụng WhatsApp trên máy tính của bạn</h4>
                        <ul>
                            <li>1. Mở WhatsApp trên điện thoại</li>
                            <li>
                                2. Nhấn vào <span>Menu <MoreVertIcon className='icon' />
                                </span>trên Android hoặc <span>Cài đặt <SettingsIcon className='icon' /> </span> trên iPhone
                            </li>
                            <li>3. Nhấn vào <span>Thiết bị liên kết</span>, rồi nhấn vào <span>Liên kết thiết bị</span></li>
                            <li>4. Hướng điện thoại vào màn hình này để quét mã QR</li>
                        </ul>
                    </div>
                    <div className="whatsapp__login-container__dialog__container__body__login">
                        <img src={qrCodeImage} alt="" />
                        <div className="whatsapp__login-container__dialog__container__body__login__google">
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                        </div>
                    </div>
                </div>
                <div className="whatsapp__login-container__dialog__container__footer">
                    <p className="whatsapp__login-container__dialog__container__footer__phone-number-link">
                        Liên kết thông qua số điện thoại
                    </p>
                    <div className="whatsapp__login-container__dialog__container__footer__instruction">
                        <div className="whatsapp__login-container__dialog__container__footer__instruction__title">
                            <h5>HƯỚNG DẪN</h5>
                            <a
                                href='https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=vi'
                                target='_blank'
                            >Bạn cần trợ giúp để bắt đầu?</a>
                        </div>
                        <div className="whatsapp__login-container__dialog__container__footer__instruction__video">
                            <video controls>
                                <source src={instructionVideo} />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDialog