import { ethers } from "ethers";
import { alchemyNetworkProviderURL, HBCContractAddress, ScavHuntAddress } from "../constants";

export const HBCABI =  [
    "function balanceOf(address account) public view returns (uint256)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function approve(address spender, uint256 amount)",
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

    static async hasApprovedHBC(address: string) {

        const HBCContractInstance = new ethers.Contract(
            HBCContractAddress,
            HBCABI,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let allowance = await HBCContractInstance.allowance(address, ScavHuntAddress)

        if (allowance.gt(0)) {
            return true
        } else {
            return false
        }
    }

    static async approveUnlimitedHBCTokens() {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        const HBCContractInstance = new ethers.Contract(
            HBCContractAddress,
            HBCABI,
            provider.getSigner()
        );

        let txn = await HBCContractInstance.approve(ScavHuntAddress, ethers.constants.MaxUint256)
        const receipt = await txn.wait();
        window.location.reload();
    }

}

export { HBCContract }