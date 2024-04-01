import Head from 'next/head';
import styles from '../styles/LendingNFT.module.css'
const UserPage = () => {


    return (
      <div className={styles.main}>
        <Head>
          <title>USER SPACE</title>
          <meta name="description" content="dApp that allows to lend NFTs agains native tokens"/>
        </Head>
        <div className={styles.centeredText}>
            <p>UNDER DEVELOPMENT</p>
        </div>
      </div>
    )
  }
  
  export default UserPage