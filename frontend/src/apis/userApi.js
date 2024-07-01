import axios from 'axios';

const url = 'http://localhost:8080/api/v1';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/user/allUsers`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/user/addUser`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}
