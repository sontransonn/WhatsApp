import React, { useContext } from 'react'
import "./LoginDialog.scss"

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { AccountContext } from '../../context/AccountProvider';

import { qrCodeImage } from '../../constants/data';

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
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div className="dialog">
            <div className="container-dialog">
                <div className="container-header">
                    <div className="content">
                        <h4>Use WhatsApp on your computer</h4>
                        <ul>
                            <li>1. Open WhatsApp on your phone</li>
                            <li>2. Tap <span>Menu : </span>on Android, or Settings on iphone</li>
                            <li>3. Tap <span>Linked devices</span> and then <span>Link a device</span></li>
                            <li>4. Point your phone at this screen on capture the QR code</li>
                        </ul>
                    </div>
                    <div className="auth">
                        <img src={qrCodeImage} alt="" />
                        <div className="auth-google">
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDialog