import { ethers } from "ethers";
import { alchemyNetworkProviderURL, HBBNFTContractAddress, StakingContractAddress } from "../constants";

const HBBNFTABI =  [
    "function nftsAvailable() public view returns(uint)",
    "function tokenCount() public view returns(uint)",
    "function setApprovalForAll(address operator, bool approved) external",
    "function isApprovedForAll(address account, address operator) public view returns (bool)",
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

    static async checkIsApproved(address: string, contractAddress: string) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let NftContract = new ethers.Contract(
            HBBNFTContractAddress,
            HBBNFTABI,
            provider.getSigner() 
        );

        let isApproved = await NftContract.isApprovedForAll(address, contractAddress)

        return isApproved;
    }
    static async approve(contractAddress: string) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let nftContractInstance = new ethers.Contract(
            HBBNFTContractAddress,
            HBBNFTABI,
            provider.getSigner() 
        );

        try {
            console.log(await nftContractInstance.populateTransaction.setApprovalForAll(contractAddress, true))
            let txn = await nftContractInstance.setApprovalForAll(contractAddress, true)
            const receipt = await txn.wait();
            window.location.reload();

            // document.getElementById('approve-button').style.display = "none"
        } catch (error: any) {
            alert(error.message)
            window.location.reload();
        }


    }
}

export { HBBNFTContract }