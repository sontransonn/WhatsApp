import axios from 'axios';

const url = 'http://localhost:8080/api/v1/message';

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/${id}`);

        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/addMessage`, data);

        return
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export const deleteAllMessages = async (id) => {
    console.log(id);
    try {
        await axios.delete(`${url}/${id}`);

        return
    } catch (error) {
        console.log('Error while calling deleteAllMessages API ', error);
    }
}