import React, {useEffect, useState} from "react";
import { ethers } from 'ethers';

import {contactAddress, contractABI} from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contactAddress, contractABI, signer);

    console.log(provider, signer, transactionContract)
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('Please enable Metamask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            console.log(accounts,'accounts')
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log('no account')
            }

        } catch (error) {
            console.log(error)
            
            throw new Error('No ethereum');
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum');
        }
    }

    const sendTransaction = async (to, value) => {
        try {
            if (!ethereum) return alert('Please install Metamask');
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum');
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}