import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Web3 from 'web3';
import ContractABI from '../../ContractAbi'
import { contractAddress } from './lending'
import { ConnectWallet, useAddress, useContractWrite } from '@thirdweb-dev/react';
import { useWallet } from '@thirdweb-dev/react'
import { ContractContext } from '../contexts/ContractContext';
import { ethers } from 'ethers';

  const DepositComponent = ({ connectWallet }) => {
    const address = useAddress();
    const [amount, setAmount] = useState('');
    const [transactionHash, setTransactionHash] = useState('');
    const {contract} = useContext(ContractContext)
    const depositFunction = useContractWrite(contract, "deposit")


    const handleDeposit = async () => {
      depositFunction.mutateAsync( {overrides: {value: amount, from: address }} )
    };
  
    return (
    
    <div>
    <Head>
        <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
    </Head>
         
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to deposit"
        />
        <button onClick={handleDeposit}>Deposit</button>
        {transactionHash && (
          <p>Transaction sent! Transaction hash: {transactionHash}</p>
        )}
      </div>
    );
  };
  
  export default DepositComponent


  // const InvestorPage = () => {

//     const callDeposit = async = () => {
//         if(contractInstance)
//         try {
//             const resuldDeposit = await contractInstance.methods.deposit().call()
//         }
//     }

//     return (
//       <div className={styles.main}>
//         <Head>
//           <title>INVESTOR SPACE</title>
//           <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
//         </Head>
//       </div>
//     )
//   }