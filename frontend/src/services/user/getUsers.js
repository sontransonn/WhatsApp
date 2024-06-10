import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/user/allUsers`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export default getUsers