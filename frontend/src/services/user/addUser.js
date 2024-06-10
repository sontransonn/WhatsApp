import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/user/addUser`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export default addUser