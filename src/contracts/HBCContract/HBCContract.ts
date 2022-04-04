import { ethers } from "ethers";
import { alchemyNetworkProviderURL, HBCContractAddress } from "../constants";

export const HBCABI =  [
    "function balanceOf(address account) public view returns (uint256)"
];


class HBCContract {
    static async getHBCBalance(address: string) {
        const HBCContractInstance =  new ethers.Contract(
            HBCContractAddress,
            HBCABI,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let balance = await HBCContractInstance.balanceOf(address)
        let formattedBalance = parseFloat(ethers.utils.formatEther(balance)).toFixed(4)
        return formattedBalance;
    }

}

export { HBCContract }