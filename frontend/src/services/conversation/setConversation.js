import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/addConversation`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export default setConversation