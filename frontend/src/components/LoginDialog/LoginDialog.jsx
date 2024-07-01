import React from 'react'
import { useDispatch } from 'react-redux';

import {
    setCurrentAccount
} from "../../redux/slices/accountSlice"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { addUser } from '../../apis/userApi';

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
        <div className="m-auto bg-white rounded relative max-h-fit min-h-screen -mt-32 shadow-md overflow-hidden pt-12 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
            <div className="min-h-full">
                <div className="flex items-center justify-between rounded-md gap-8 py-8 px-5 w-[85%] m-auto mb-10 border border-solid">
                    <img
                        src={imageEmpty}
                        alt=""
                        className='w-24'
                    />
                    <div
                        className="flex flex-col gap-4"
                    >
                        <h4 className='text-lg font-medium break-words text-slate-500'>Tải xuống WhatsApp cho Windows</h4>
                        <p className='hidden md:block text-slate-400'>
                            Tận hưởng tính năng gọi điện, chia sẻ màn hình và
                            trải nghiệm nhanh hơn với ứng dụng cho Windows mới.
                        </p>

                        <button className='bg-buttonColor hover:bg-green-600 text-white block py-2 px-3 whitespace-nowrap rounded-3xl md:hidden'>
                            Tải ứng dụng
                        </button>
                    </div>
                    <button className='hidden bg-buttonColor hover:bg-green-600 py-2 px-3 whitespace-nowrap rounded-3xl md:block text-white'>
                        Tải ứng dụng
                    </button>
                </div>

                <div className="flex w-[85%] max-h-fit justify-between m-auto gap-11 pb-12 border-b border-solid border-slate-300 flex-col lg:flex-row">
                    <div className="flex flex-col justify-center">
                        <h4 className='text-3xl text-slate-500 font-light'>Sử dụng WhatsApp trên máy tính của bạn</h4>
                        <ul className='mt-11 text-slate-500 text-lg flex flex-col gap-5'>
                            <li>1. Mở WhatsApp trên điện thoại</li>
                            <li>
                                2. Nhấn vào <span className='relative'>Menu <MoreVertIcon className='icon' />
                                </span>trên Android hoặc <span className='relative'>Cài đặt <SettingsIcon className='icon' /> </span> trên iPhone
                            </li>
                            <li>3. Nhấn vào <span>Thiết bị liên kết</span>, rồi nhấn vào <span>Liên kết thiết bị</span></li>
                            <li>4. Hướng điện thoại vào màn hình này để quét mã QR</li>
                        </ul>
                    </div>
                    <div className="flex relative justify-end max-lg:justify-center">
                        <img
                            src={qrCodeImage}
                            alt=""
                            className='w-[270px]'
                        />
                        <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className='w-[85%] m-auto py-[40px] text-green-600 font-medium text-lg cursor-pointer'>
                        Liên kết thông qua số điện thoại
                    </p>
                    <div className="w-full m-auto bg-[#f9f9fa] flex flex-col justify-center items-center gap-[50px] py-[30px]">
                        <div className="text-center">
                            <h5 className='text-2xl font-normal text-slate-400 mb-[15px]'>HƯỚNG DẪN</h5>
                            <a
                                href='https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=vi'
                                target='_blank'
                                className='text-lg text-[#30967e] cursor-pointer hover:underline'
                            >Bạn cần trợ giúp để bắt đầu?</a>
                        </div>
                        <div className="w-full flex justify-center">
                            <video
                                controls
                                className='w-[80%] max-md:w-[100%]'
                            >
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