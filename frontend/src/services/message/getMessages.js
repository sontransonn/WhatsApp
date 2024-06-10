import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export default getMessages