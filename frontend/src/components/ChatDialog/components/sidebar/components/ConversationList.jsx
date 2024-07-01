import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ConversationItem from './ConversationItem';

import { getUsers } from '../../../../../apis/userApi';

const ConversationList = ({ selectOption, text }) => {
    const [users, setUsers] = useState([]);

    const {
        currentAccount
    } = useSelector(state => state.account)

    useEffect(() => {
        if (selectOption === 1) {
            const getAllUsers = async () => {
                const data = await getUsers();
                let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
                setUsers(fiteredData);
            }

            getAllUsers()
        } else if (selectOption === 2) {
            setUsers([])
        } else if (selectOption === 3) {
            setUsers([])
        }
    }, [text, selectOption])

    return (
        <div className="flex-1 bg-[#151d22]">
            {
                users && users.map((user, index) => (
                    user.sub !== currentAccount.sub &&
                    <ConversationItem user={user} key={index} />
                ))
            }
        </div>
    )
}

export default ConversationList