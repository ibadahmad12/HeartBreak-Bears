import { ethers } from "ethers";
import { alchemyNetworkProviderURL, StakingContractAddress } from "../constants";

export const StakedAbi = [
    "function bonusRewards(address _staker) public view returns (uint256[] memory)",
    "function stakeIds(address _staker) public view returns (uint256[] memory)",
    "function tokensAwarded(address _staker) public view returns (uint256)"
];

class StakingContract{
    
    NFTContractInstance = undefined;
    static async getTokenBalance(address:any) {
        if(!address) {
            return undefined;
        }
        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let bonuses = (await StakingContractInstance.bonusRewards(address)).map(Number)

        let bonus = 0;
        if (bonuses.length > 1) {

            var total = 0;
            for (var i = 0; i < bonuses.length; i++) {
                total += bonuses[i];
            }
            var avg = total / bonuses.length;

            bonus = parseInt(avg.toFixed(2));
        } else if (bonuses.length == 1) {
            bonus = bonuses[0]
        } else {
            bonus = 0;
        }
        return  bonus;
    }

    static async getNFTSInWallet(address: string) {
        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let stakedIds = await StakingContractInstance.stakeIds(address)
        let myNfts = stakedIds.map(Number)
        return myNfts;
    }

    static async  getAvailableReward(address: string) {
        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let tokensAwarded = parseFloat(ethers.utils.formatEther(await StakingContractInstance.tokensAwarded(address))).toFixed(4)
        return tokensAwarded;
    }
}

export { StakingContract }