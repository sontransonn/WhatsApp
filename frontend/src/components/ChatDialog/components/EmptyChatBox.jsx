import React from 'react'

import HttpsIcon from '@mui/icons-material/Https';

import imageEmpty from "../../../assets/images/imageEmpty.png"

const EmptyChatBox = () => {
    return (
        <div className="h-full text-center flex flex-col items-center justify-center gap-[35px] relative px-[25px]">
            <img
                src={imageEmpty}
                alt=""
                className='w-[380px]'
            />
            <h5 className='text-[32px] font-[300] break-words text-[#a1b2b2] max-md:max-w-[450px]'>Tải xuống WhatsApp cho Windows</h5>
            <p className='text-[#a1b2b2] break-words max-md:max-w-[450px]'>
                Hãy tải xuống ứng dụng cho Windows để gọi điện,
                chia sẻ màn hình và tận hưởng trải nghiệm nhanh hơn.
            </p>
            <button className='py-[10px] px-[25px] outline-none border-none rounded-3xl bg-[#00a884] text-[18px] font-[400] cursor-pointer hover:bg-[#0cbc96]'>
                Tải xuống từ Microsoft Store
            </button>
            <span className='absolute bottom-[20px] text-[#8d9595] text-[14px] flex items-center gap-[8px]'>
                <HttpsIcon className='text-[14px]' />
                Các tin nhắn cá nhân của bạn được mã hóa đầu cuối
            </span>
        </div>
    )
}

export default EmptyChatBox