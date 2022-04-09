import { ethers } from "ethers";
import React, {useState, ReactChild, ReactChildren, useEffect} from "react";
import { ChainID } from "../contracts/constants";


type WalletContextType = {
    isWalletConnected: boolean;
    setIsWalletConnected: Function;
    connectToWallet: Function;
    error: string;
    address: string;
    bonus: string;
    setBonus: Function;
    nftsInWallet: string[];
    setNFTSInWallet: Function;    
    nftsStaked: string[];
    setNFTSStaked: Function;
    tokensRewarded: string;
    setTokensRewarded: Function;
    hbcBalance: string,
    setHBCBalance: Function,
    provider: ethers.providers.Web3Provider | undefined;
};

const defaultValue:WalletContextType = {
    isWalletConnected: false,
    setIsWalletConnected: ()=>{},
    connectToWallet: ()=>{},
    error: '',
    address: '',
    bonus: '',
    setBonus: () => {},
    tokensRewarded: '',
    setTokensRewarded: ()=>{},
    nftsInWallet: [],
    setNFTSInWallet: ()=>{},
    nftsStaked: [],
    setNFTSStaked: ()=>{},
    hbcBalance: '',
    setHBCBalance: ()=>{},
    provider: undefined,
}

interface ContextProviderProps  {
    children: ReactChild | ReactChildren;
}

const WalletContext = React.createContext<WalletContextType>(defaultValue);

function WalletContextProvider ({children} : ContextProviderProps) {

    const MainNetVersion = ChainID;

    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const [bonus, setBonus] = useState("");
    const [hbcBalance, setHBCBalance] = useState("");
    const [tokensRewarded, setTokensRewarded] = useState("");
    const [nftsInWallet, setNFTSInWallet] = useState([]);
    const [nftsStaked, setNFTSStaked] = useState([]);
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | undefined>(undefined);

    const connectToWallet = async () => {         
        if(!isWalletConnected){          
          if(window.ethereum) {
              console.log(window.ethereum.networkVersion, MainNetVersion)
                if(window.ethereum.networkVersion != MainNetVersion) {
                    setError("Wrong Network. Please connect to Ethereum Network");
                    window.location.reload();
                }else {
                let provider = new ethers.providers.Web3Provider(window.ethereum);       
                if (typeof provider !== 'undefined') {
                    setProvider(provider);
                    const [address] = await window.ethereum.enable();
                    setAddress(address);
                    setIsWalletConnected(true);
                    window.ethereum.on("chainChanged", function (chains:any) {
                        setIsWalletConnected(false);
                        setAddress("");
                        window.location.reload();
                    });
                    window.ethereum.on('accountsChanged', function (accounts:any) {
                        setIsWalletConnected(false);
                        setAddress("");
                        window.location.reload();
                    })
                }
                }        
            } else {
                setError("Wallet not connected");
                window.location.reload();
            }
        }   
        return;
    }

    return (
        <WalletContext.Provider value={{
            isWalletConnected, 
            setIsWalletConnected,
            connectToWallet,
            error,
            address,
            bonus,
            setBonus,
            tokensRewarded,
            setTokensRewarded,
            nftsInWallet,
            setNFTSInWallet,
            nftsStaked,
            setNFTSStaked,
            hbcBalance,
            setHBCBalance,
            provider
            }}>
            {children}
        </WalletContext.Provider>
    )
}

export {WalletContext , WalletContextProvider};