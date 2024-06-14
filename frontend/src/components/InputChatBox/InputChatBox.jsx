import React, { useEffect, useState } from 'react'
import "./InputChatBox.scss"

import { Mic } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { MdMood } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import InputChatBoxOptions from './InputChatBoxOptions/InputChatBoxOptions';

import uploadFile from '../../services/file/uploadFile';

const FooterChatBox = (props) => {

    const {
        sendText,
        value,
        setValue,
        setFile,
        file,
        setImage,
        openEmoji,
        setOpenEmoji
    } = props

    const [openOptions, setOpenOptions] = useState(false)

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                setImage(response.data);
            }
        }

        getImage()
    }, [file])

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    const handleOpenEmoji = () => {
        setOpenEmoji(true)
    }

    const handleCloseEmoji = () => {
        setOpenEmoji(false)
    }

    return (
        <div className='footer'>
            {openEmoji
                &&
                <IoClose
                    className='icon'
                    onClick={handleCloseEmoji}
                />
            }
            <MdMood
                className={openEmoji ? "icon--selected" : "icon"}
                onClick={handleOpenEmoji}
            />
            <div className="footer__options">
                <AddIcon
                    className='icon'
                    onClick={() => setOpenOptions((prev) => !prev)}
                />
                {openOptions && <InputChatBoxOptions />}
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder='Soạn tin nhắn'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </div>
            <Mic className='icon' />
        </div>
    )
}

export default FooterChatBox