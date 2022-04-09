import { ethers } from "ethers";
import { alchemyNetworkProviderURL, StakingContractAddress, HBBNFTContractAddress } from "../constants";

export const StakedAbi = [
    "function bonusRewards(address _staker) public view returns (uint256[] memory)",
    "function stakeIds(address _staker) public view returns (uint256[] memory)",
    "function tokensAwarded(address _staker) public view returns (uint256)",
    "function stakeBatch(uint256[] memory _tokenIds) public",
    "function withdraw() public",
    "function withdrawSelected(uint256[] memory _tokenIds) public",
    "function claimTokens() public",
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
        var ethersProvider = new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL);
    
        let erc1155 = [
            "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
            "event TransferBatch(address indexed operator,address indexed from,address indexed to,uint256[] ids,uint256[] values)",
            "function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory)"
        ];

        let NFTContractInstance = new ethers.Contract(
            HBBNFTContractAddress,
            erc1155,
            ethersProvider
        );
    
        let txnsInSingle = NFTContractInstance.filters.TransferSingle(null, null, address);
        let resultsInSingle = NFTContractInstance.queryFilter(txnsInSingle)
    
        let txnInBatch = NFTContractInstance.filters.TransferBatch(null, null, address);
        let resultsInBatch = NFTContractInstance.queryFilter(txnInBatch)
    
        const txns = await Promise.all([resultsInSingle, resultsInBatch])
    
        let nft1 = txns[0].map((x) => x.args?.id.toString())
        let nft2: any = []
        for (const txn of txns[1]) {
            nft2 = nft2.concat(txn.args?.ids.map(String))
        }
    
        let tempNfts = nft1.concat(nft2)
        let nfts = [...Array.from(new Set(tempNfts))];
    
        let batch = await NFTContractInstance.balanceOfBatch(Array(nfts.length).fill(address), nfts)
        let balance = batch.map(Number)
    
        let indexes = StakingContract.getAllIndexes(balance, 1)
        let myNfts = nfts.filter((x, i) => indexes.includes(i))

        return myNfts;
    }

    static getAllIndexes(arr: any, val: any) {
        var indexes = [], i;
        for (i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }

    static async getStakedNFTS(address: string) {
        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let stakedIds = await StakingContractInstance.stakeIds(address)
        let myNfts = stakedIds.map(Number)
        return myNfts;
    }

    static async getAvailableReward(address: string) {
        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let tokensAwarded = parseFloat(ethers.utils.formatEther(await StakingContractInstance.tokensAwarded(address))).toFixed(4)
        return tokensAwarded;
    }

    static async stakeNFTs(address: string, nfts: string[]) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let nftAbi = [
            "function isApprovedForAll(address account, address operator) public view returns (bool)",
        ];

        let NFTContractInstance = new ethers.Contract(
            HBBNFTContractAddress,
            nftAbi,
            provider.getSigner()
        );


        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            provider.getSigner()
        );

        let isApproved = await NFTContractInstance.isApprovedForAll(address, StakingContractAddress)

        if (!isApproved) {
            alert("First you have to approve the staking contract")
        }
        else if (nfts.length < 1) {
            alert("Please select a minimum of 1 NFT for staking")
        }
        else {

            try {
                let txn = await StakingContractInstance.stakeBatch(nfts)
                const receipt = await txn.wait();
                window.location.reload();
            } catch (error) {

                if (error instanceof Error) {
                    alert(error.message)
                }
                window.location.reload();
            }
        }
    }

    static async unstakeAll(stakedNfts: string[]) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            provider.getSigner()
        );

        if (stakedNfts.length < 1) {
            alert("You dont have any NFTs to unstake")
        } else {

            try {
                let txn = await StakingContractInstance.withdraw()
                const receipt = await txn.wait();

                window.location.reload();
            } catch (error: any) {
                alert(error.message)
                window.location.reload();

            }
        }
    }

    static async unstakeSelected(nfts: string[]) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            provider.getSigner()
        );

        if (nfts.length < 1) {
            alert("You have not selected any NFTs")
        } else {

            try {
                let txn = await StakingContractInstance.withdrawSelected(nfts)
                const receipt = await txn.wait();

                window.location.reload();
            } catch (error: any) {
                alert(error.message)
                window.location.reload();

            }
        }
    }

    static async claimTokens(address: string) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let StakingContractInstance = new ethers.Contract(
            StakingContractAddress,
            StakedAbi,
            provider.getSigner()
        );

        let tokensAwarded = await StakingContractInstance.tokensAwarded(address)

        if (tokensAwarded.gt(0)) {

            try {
                let txn = await StakingContractInstance.claimTokens()
                const receipt = await txn.wait();

                window.location.reload();
            } catch (error: any) {
                alert(error.message)
                window.location.reload();
            }
        } else {
            alert("You have no HBC available to claim")
        }
    }

}

export { StakingContract }