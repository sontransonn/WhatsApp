import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newMessageFlag: false //Đánh dấu mỗi khi có tin nhắn mới
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setNewMessageFlag: (state, action) => {
            state.newMessageFlag = action.payload
        }
    }
})

export const {
    setNewMessageFlag,
} = messageSlice.actions

export default messageSlice.reducer
