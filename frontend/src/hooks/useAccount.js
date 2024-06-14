import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    setCurrentAccount,
    setChattingAccount,
    setAccounts,
    setActiveAccounts
} from '../redux/slices/accountSlice';

const useAccount = () => {
    const dispatch = useDispatch();
    const {
        currentAccount,
        chattingAccount,
        accounts,
        activeAccounts
    } = useSelector((state) => state.account);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch(setCurrentAccount(JSON.parse(user)));
        }
    }, [dispatch]);

    return {
        currentAccount,
        setCurrentAccount: (account) => dispatch(setCurrentAccount(account)),
        chattingAccount,
        setChattingAccount: (account) => dispatch(setChattingAccount(account)),
        accounts,
        setAccounts: (accounts) => dispatch(setAccounts(accounts)),
        activeAccounts,
        setactiveAccounts: (users) => dispatch(setActiveAccounts(users))
    }
}

export default useAccount