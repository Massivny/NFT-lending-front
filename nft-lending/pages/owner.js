import Head from 'next/head';
import styles from '../styles/LendingNFT.module.css'
const OwnerPage = () => {
    return (
      <div className={styles.main}>
        <Head>
          <title>OWNER SPACE</title>
          <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
        </Head>
      </div>
    )
  }
  
  export default OwnerPage