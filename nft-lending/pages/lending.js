import Head from 'next/head'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/LendingNFT.module.css'
import { createThirdwebClient } from "thirdweb"
import { useContract } from "thirdweb/react"
import { createWallet, injectedProvider } from "thirdweb/wallets"
import { CONTRACT_ADDRESS, ConnectWallet, useContractRead } from '@thirdweb-dev/react'
import React, { useState, useEffect } from 'react';
import ContractABI from '../../ContractAbi'
import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router';

const LendingNFT = () => {
  const [contractInstance, setContractInstance] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const initContract = async () => {
      // Create web3 instance with Blast Sepoli Testnet provider
      const web3 = new Web3('https://sepolia.blast.io');

      // ABI of your contract (replace with your actual ABI)
      const contractABI = [ContractABI]; // Insert your contract's ABI here

      // Address of your deployed contract
      const contractAddress = '0xF27e84E73b7eb85F8D56cD4191d635C2e6666ed7';

      // Instantiate the contract
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      setContractInstance(contract);
    };
    initContract();
  }, []);


  const handleButtonClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>LendingNFT App</title>
        <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
      </Head>
      <nav className = "navbar">
        <div className = "container">
          <div className = "navbar-brand">
            <h2>LendingNFT</h2>
          </div>
          <div className = "navbar-end">
            <ConnectWallet/>
            <h1>Counter dApp</h1>
          </div>
        </div>
      </nav>
      <section>
        <p>
          <button onClick={() => handleButtonClick('user')}>User</button>
        </p>
      </section>
      <label>
        <button onClick={() => handleButtonClick('investor')}>Investor</button>
      </label>
      <section>
      <label>
      <button onClick={() => handleButtonClick('owner')}>Owner</button>
      </label>

      </section>
    </div>
  )
}

export default LendingNFT
