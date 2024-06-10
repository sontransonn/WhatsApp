import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const uploadFile = async (data) => {
    try {
        await axios.post(`${url}/file/upload`, data);

        return;
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export default uploadFile