import React, { useContext } from 'react'
import "./LoginDialog.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { AccountContext } from '../../context/AccountProvider';
import addUser from '../../services/user/addUser';

import { qrCodeImage } from '../../constants/data';

import imageEmpty from "../../assets/images/imageEmpty.png"
import instructionVideo from "../../assets/videos/instruction.mp4"

const LoginDialog = () => {

    const {
        setAccount,
        showloginButton,
        setShowloginButton,
        setShowlogoutButton
    } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwtDecode(res.credential);
        setAccount(decoded)
        localStorage.setItem("user", JSON.stringify(decoded))
        await addUser(decoded);
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div className="login-dialog">
            <div className="login-dialog__container">
                <div className="login-dialog__container__installer">
                    <img src={imageEmpty} alt="" />
                    <div className="login-dialog__container__installer__content">
                        <p className='login-dialog__container__installer__content__title'>Tải xuống WhatsApp cho Windows</p>
                        <p className='login-dialog__container__installer__content__body'>
                            Tận hưởng tính năng gọi điện, chia sẻ màn hình và
                            trải nghiệm nhanh hơn với ứng dụng cho Windows mới.
                        </p>
                    </div>
                    <button className="login-dialog__container__installer__btn-install">
                        Tải ứng dụng
                    </button>
                </div>
                <div className="login-dialog__container__header">
                    <div className="login-dialog__container__header__content">
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
                    <div className="login-dialog__container__header__login">
                        <img src={qrCodeImage} alt="" />
                        <div className="login-dialog__container__header__login-google">
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                        </div>
                    </div>
                </div>
                <p className="login-dialog__container__phone">
                    Liên kết thông qua số điện thoại
                </p>
                <div className="login-dialog__container__instruction">
                    <div className="login-dialog__container__instruction_title">
                        <h5>HƯỚNG DẪN</h5>
                        <a
                            href='https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=vi'
                            target='_blank'
                        >Bạn cần trợ giúp để bắt đầu?</a>
                    </div>
                    <div className="login-dialog__container__instruction_video">
                        <video controls>
                            <source src={instructionVideo} />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDialog