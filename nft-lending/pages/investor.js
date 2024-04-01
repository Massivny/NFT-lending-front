import Head from 'next/head';
import styles from '../styles/LendingNFT.module.css'
const InvestorPage = () => {
    return (
      <div className={styles.main}>
        <Head>
          <title>INVESTOR SPACE</title>
          <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
        </Head>
      </div>
    )
  }
  
  export default InvestorPage