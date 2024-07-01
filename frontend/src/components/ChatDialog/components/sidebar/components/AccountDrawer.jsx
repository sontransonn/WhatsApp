import React from 'react'
import { useSelector } from 'react-redux';

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
    <div className="absolute right-0 top-0 left-0 bottom-0 z-20 bg-[#111b21]">
      <div className="bg-[#202c33] h-[120px] flex items-end p-[20px] text-white">
        <div className="flex items-center gap-[30px] text-[#d4dee0]">
          <ArrowBack
            className='cursor-pointer'
            onClick={handleClose}
          />
          <h1 className='text-[20px] font-[450]'>Trang cá nhân</h1>
        </div>
      </div>

      <div>
        <div className="flex justify-center p-[30px] border-b border-solid border-blackOpacity">
          <img
            src={currentAccount.picture}
            alt=""
            className='w-[200px] rounded-[50%]'
          />
        </div>

        <div className="py-[15px] px-[30px] border-b border-solid border-blackOpacity">
          <h6 className='text-[#12865d] text-[18px] font-[400] mb-[25px]'>Tên bạn</h6>
          <div className="flex items-center justify-between">
            <span className='text-white'>{currentAccount.name}</span>
            <EditIcon className='text-[#a1b2b2] cursor-pointer' />
          </div>
        </div>

        <p className='text-[16px] py-[20px] px-[30px] text-[#a1b2b2] border-b border-solid border-blackOpacity pb-[30px]'>
          Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
          hiển thị với những người liên hệ khác trên WhatsApp.
        </p>

        <div className="py-[15px] px-[30px]">
          <h6 className='text-[#12865d] text-[18px] font-[400] mb-[25px]'>Giới thiệu</h6>
          <div className="flex items-center justify-between">
            <span className='text-white border-none'>Xin chào! Mình đang dùng WhatsApp nè.</span>
            <EditIcon className='text-[#a1b2b2] cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDrawer