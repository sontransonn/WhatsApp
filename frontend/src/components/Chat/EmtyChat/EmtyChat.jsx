import React from 'react'
import "./EmtyChat.scss"

import imageEmpty from "../../../assets/images/imageEmpty.png"

const EmtyChat = () => {
    return (
        <div className="emtyChat">
            <img src={imageEmpty} alt="" />
            <h5>Tải xuống WhatsApp cho Windows</h5>
            <p>
                Hãy tải xuống ứng dụng cho Windows để gọi điện,
                chia sẻ màn hình và tận hưởng trải nghiệm nhanh hơn.
            </p>
            <button>Tải xuống từ Microsoft Store</button>
            <span>Các tin nhắn cá nhân của bạn được mã hóa đầu cuối</span>
        </div>
    )
}

export default EmtyChat