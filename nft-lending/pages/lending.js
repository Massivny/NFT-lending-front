import Head from 'next/head'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/LendingNFT.module.css'
import { useContract } from "@thirdweb-dev/react"
import { createWallet, injectedProvider } from "thirdweb/wallets"
import { CONTRACT_ADDRESS,ConnectWallet, useContractRead } from '@thirdweb-dev/react'
import React, { useState, useEffect } from 'react';
import ContractABI from '../../ContractAbi'

import { useRouter } from 'next/router';

const LendingNFT = () => {
  const [contractInstance, setContractInstance] = useState(null);
  const [account, setAccount] = React.useState(null);
  const router = useRouter();
  const contractAddress = '0x8d081425D7740d82ea40390152d754a9C9fdaE8b'

  const contract = useContract(contractAddress, ContractABI)


  const handleButtonClick = (page) => {
    router.push(`/${page}`)
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>NFT-Filand </title>
        <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
      </Head>
      <nav className = "navbar">
        <div className = "container">
          <div className = "navbar-brand">
            <h2> NFT-Filand </h2>
          </div>
          <div className = "navbar-end">
            <ConnectWallet/>
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
