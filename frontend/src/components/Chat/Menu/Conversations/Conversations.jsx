import { useState, useEffect, useContext } from 'react';
import "./Conversations.scss"

import Conversation from './Conversation/Conversation';

import { AccountContext } from "../../../../context/AccountProvider"

import getUsers from '../../../../services/user/getUsers';

const Conversations = ({ text }) => {
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
        <div className="conversations">
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                    </>
                ))
            }
        </div>
    )
}

export default Conversations