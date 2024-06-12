import { useState, useEffect, useContext } from 'react';
import "./ConversationsChatMenu.scss"

import ConversationItem from './ConversationItem/ConversationItem';

import { AccountContext } from "../../context/AccountProvider"

import getUsers from '../../services/user/getUsers';

const ConversationsChatMenu = ({ selectOption, text }) => {
    const [users, setUsers] = useState([]);

    const {
        account,
        socket,
        setActiveUsers
    } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }

        fetchData()
    }, [text])

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <div className="chat-menu__conversations">
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub &&
                    <ConversationItem user={user} key={index} />
                ))
            }
        </div>
    )
}

export default ConversationsChatMenu