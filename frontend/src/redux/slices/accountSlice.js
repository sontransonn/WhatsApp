import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentAccount: null, //Tài khoản hiện tại đăng nhập
    chattingAccount: {}, // Tài khoản mà đang chat
    accounts: [],  // Danh sách các tài khoản
    activeAccounts: [], // Danh sách các tài khoản đang hoạt động
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setCurrentAccount(state, action) {
            state.currentAccount = action.payload;
        },
        setChattingAccount(state, action) {
            state.chattingAccount = action.payload;
        },
        setAccounts(state, action) {
            state.accounts = action.payload;
        },
        setActiveAccounts(state, action) {
            state.activeUsers = action.payload;
        }
    },
});

export const {
    setCurrentAccount,
    setChattingAccount,
    setAccounts,
    setActiveAccounts,
} = accountSlice.actions;

export default accountSlice.reducer;