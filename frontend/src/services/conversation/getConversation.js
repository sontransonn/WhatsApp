import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/getConversation`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export default getConversation