import React, { useEffect, useState } from 'react'
import "./Footer.scss"

import { EmojiEmotions, Mic } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

import FooterMenu from './FooterMenu/FooterMenu';

import uploadFile from '../../../../../services/file/uploadFile';

const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {

    const [openOptions, setOpenOptions] = useState(true)

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

    return (
        <div className='footer'>
            <EmojiEmotions className='icon' />
            <label htmlFor="fileInput">
                <AddIcon
                    className='icon'
                    onClick={() => setOpenOptions((prev) => !prev)}
                />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
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

export default Footer