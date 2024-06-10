import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/addMessage`, data);

        return
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export default newMessage