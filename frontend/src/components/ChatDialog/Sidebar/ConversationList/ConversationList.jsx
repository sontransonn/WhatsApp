import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ConversationList.scss"

import ConversationItem from './ConversationItem/ConversationItem';

import getUsers from '../../../../services/user/getUsers';

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

    // useEffect(() => {
    //     socket.current.emit('addUser', account);
    //     socket.current.on("getUsers", users => {
    //         setActiveUsers(users);
    //     })
    // }, [account])

    return (
        <div className="chat-menu__conversations">
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