import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lending from './lending';
import User from './user'
import Investor from './investor'
import Owner from './owner'
import { useEffect } from 'react';
import { defineChain } from 'thirdweb'
import { ContractProvider } from '../contexts/ContractContext';
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'ethereum';

const chain = {
	name: "Blast Sepolia Testnet",
	chainId: 168587773,
	rpcUrls: ["168587773.rpc.thirdweb.com"],
  };

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const { pathname } = window.location;
		if (pathname === '/') {
		  router.push('/lending'); // Redirect to the default route
		}
	  }, []);
	
	  {/* <Route path="/" element={<Lending />} />
				<Route path="/user" element={<User />} />
				<Route path="/investor" element={<Investor />} />
				<Route path="/owner" element={<Owner />} /> */}
	
	return (
		<ThirdwebProvider
			activeChain={'sepolia'}
			clientId="02549f8e16068605c4537f94b60c28e6"
		>	
				<ContractProvider>
					<Component {...pageProps} />
				</ContractProvider>
		</ThirdwebProvider>

	);
}

export default MyApp;
