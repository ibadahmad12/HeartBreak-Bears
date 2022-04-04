import { ethers } from "ethers";
import { alchemyNetworkProviderURL, HBBNFTContractAddress } from "../constants";

const HBBNFTABI =  [
    "function nftsAvailable() public view returns(uint)",
    "function tokenCount() public view returns(uint)"
];

class HBBNFTContract {

    static async getNftStats () {
        let nftContractInstance = new ethers.Contract(
            HBBNFTContractAddress,
            HBBNFTABI,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let tokenCount = await nftContractInstance.tokenCount()
        let nftsAvailable = await nftContractInstance.nftsAvailable()
        return `${tokenCount} / ${nftsAvailable}`;
    }

}

export { HBBNFTContract }