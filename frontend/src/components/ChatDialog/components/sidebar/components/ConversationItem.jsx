import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    setChattingAccount
} from "../../../../../redux/slices/accountSlice"

import { FaChevronDown } from "react-icons/fa";

import {
    getConversation,
    setConversation
} from '../../../../../apis/conversationApi';

import formatDate from '../../../../../utils/formatDate';

const ConversationItem = ({ user }) => {
    const [message, setMessage] = useState({});

    const dispatch = useDispatch();
    const {
        currentAccount
    } = useSelector(state => state.account)

    const {
        newMessageFlag
    } = useSelector(state => state.message)

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: currentAccount.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }

        getConversationMessage()
    }, [newMessageFlag])

    const getUser = async () => {
        dispatch(setChattingAccount(user));
        await setConversation({ senderId: currentAccount.sub, receiverId: user.sub });
    }

    return (
        <div
            className="flex py-[13px] px-[15px] cursor-pointer gap-[15px] hover:bg-blackOpacity"
            onClick={() => getUser()}
        >
            <img
                src={user.picture}
                alt=""
                className='w-[50px] h-[50px] rounded-[50%]'
            />
            <div className="w-full flex justify-center flex-col gap-[5px]">
                <div className="flex justify-between items-center">
                    <h4 className='text-white text-[15px] font-[400]'>{user.name}</h4>
                    {
                        message?.text &&
                        <p className='text-[#7b8c95] text-[12px]'>{formatDate(message?.timestamp)}</p>
                    }
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-[#7b8c95]'>
                        {message?.text?.includes('localhost') ? 'media' : message.text}
                    </p>
                    <FaChevronDown className='text-[#7b8c95]' />
                </div>
            </div>
        </div>
    )
}

export default ConversationItem