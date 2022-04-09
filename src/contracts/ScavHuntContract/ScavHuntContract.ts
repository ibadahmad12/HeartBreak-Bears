import { ethers } from "ethers";
import { RewardInfo } from "../../components/GamePages/CommonGamePage/CommonPageMainSection/CommonGamePageMainSection";
import { alchemyNetworkProviderURL, EtherscanURL, ScavHuntAddress } from "../constants";

interface GameInfoCostTimeResult {
    costPerHunt: number;
    timePerHunt: number;
    costPerHuntExpress: number;
    timePerHuntExpress: number;
    expressFactor: number;
}

const ScavHuntAbi = [
    "function getGame(string name) view returns (tuple(string name, uint256 cost, uint256 duration, string[] rewardNames, bool isEnabled))",
    "function expressFactor() view returns (uint256)",
    "function gameInfo(uint256) view returns (uint256 timestamp, string gameName, bool isExpress)",
    "function startGame(string memory name,uint256 tokenId,bool isExpress)",
    "function endGame(string name, uint256 tokenId)"
];

export function secondsToHms(d:any) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    // return hDisplay + mDisplay + sDisplay;
    return hDisplay;
}

export function msToHMS(ms:number) {
    let seconds = ms / 1000;
    const hours = Math.round(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    const minutes = Math.round(seconds / 60); // 60 seconds in 1 minute
    seconds = Math.round(seconds % 60);

    return (hours + ":" + minutes + ":" + seconds);
}
class ScavHuntContract {

    static async getGameCostAndTimeInfo(gameName: string) {

        let ScavengerHuntInstance = new ethers.Contract(
            ScavHuntAddress,
            ScavHuntAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let scavengerGameInfo = await ScavengerHuntInstance.getGame(gameName);
        //let scavengerHuntGameDuration = scavengerGameInfo.duration * 1000
        let scavengerHuntExpressFactor = (await ScavengerHuntInstance.expressFactor()).toNumber()

        const result: GameInfoCostTimeResult = {
            costPerHunt: parseInt(ethers.utils.formatEther(scavengerGameInfo.cost)),
            costPerHuntExpress: parseInt(ethers.utils.formatEther(scavengerGameInfo.cost.mul('2'))),
            timePerHunt: parseInt(secondsToHms(scavengerGameInfo.duration)),
            timePerHuntExpress:  parseInt(secondsToHms(scavengerGameInfo.duration.div('2'))),
            expressFactor: scavengerHuntExpressFactor
        }
        return result;
    }

    static async getGameInfo(tokenId: string, gameName: string) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let ScavengerHunt = new ethers.Contract(
            ScavHuntAddress,
            ScavHuntAbi,
            provider
        );

        try {
            let info = await ScavengerHunt.gameInfo(tokenId)
            return info
        }  catch (error: any) {
            alert(error.message)
            window.location.reload();

        }
    }

    static async hunt(name: string, tokenId: string, isExpress = false) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let ScavengerHunt = new ethers.Contract(
            ScavHuntAddress,
            ScavHuntAbi,
            provider.getSigner()
        );

        console.log(name, tokenId, isExpress)
        try {
            let txn = await ScavengerHunt.startGame(name, tokenId, isExpress)
            const receipt = await txn.wait();
            window.location.reload();
        } catch (error: any) {
            alert(error.message)
            window.location.reload();

        }
    }

    
    static async endHunt(name: string, tokenId: string, timeRemaining: number) : Promise<RewardInfo>  {

        let info = {
            heading: "",
            subheading: "",
            subheading2: "",
            miniText: "",
            showModal: false,
        };
        if (timeRemaining > 0) {
            alert("The game has not ended yet")
            window.location.reload();
            return info;
        }
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let ScavengerHunt = new ethers.Contract(
            ScavHuntAddress,
            ScavHuntAbi,
            provider.getSigner()
        );

        try {
            const gasUsed = await ScavengerHunt.estimateGas.endGame(name, tokenId)
            let txn = await ScavengerHunt.endGame(name, tokenId, {gasLimit: gasUsed.mul("2")})
            const receipt = await txn.wait();

            let events;

            let eRewardType;
            let eAmount;
            let eTokenId;

            for (const event of receipt.events) {
                if (event.topics[0] == "0xe18bff3191cd9b861b58a65e15cb14254c3235813e91d333b2f726fc8a760c26") {
                    events = [event.topics]
                    eRewardType = parseInt(event.topics[1])
                    eAmount = ethers.utils.formatEther(event.topics[2])
                    eTokenId = parseInt(event.topics[3])
                }
            }

            console.log("EVENT: ", eRewardType, eAmount, eTokenId)

            if (eRewardType == 0) { //  HBC Token
                info["heading"] = `CONGRATULATIONS`
                info["subheading"] = `YOU HAVE WON`
                info["subheading2"] = `${eAmount} HBC`
                info["miniText"] =  `You can validate your rewards onchain here: ${EtherscanURL}${receipt.transactionHash}`
            } else if (eRewardType == 1) { // ETH
                info["heading"] = `CONGRATULATIONS`
                info["subheading"] = `YOU HAVE WON`
                info["subheading2"] = `${eAmount} ETH`
                info["miniText"] =  `You can validate your rewards onchain here: ${EtherscanURL}${receipt.transactionHash}`
            } else if (eRewardType == 2) { // IOU
                info["heading"] = `CONGRATULATIONS`
                info["subheading"] = `YOU HAVE WON`
                let iouName;
                if (eTokenId == 1) { iouName = "Adidas NFT" }
                else if (eTokenId == 2) { iouName = "Squishy Squad NFT" }
                else if (eTokenId == 3) { iouName = "Nice Fun Zombie NFT" }
                else if (eTokenId == 4) { iouName = "Whitelist NFT" }
                info["subheading2"] = `The ${iouName}`
                info["miniText"] =  `You can validate your rewards onchain here: ${EtherscanURL}${receipt.transactionHash}`
            } else if (eRewardType == 3) { // NOTHING
                info["heading"] = `OH NO :(`
                info["subheading"] = `YOU DIDNT WIN`
                info["subheading2"] = `BETTER LUCK NEXT TIME`
                info["miniText"] =  `You can validate your rewards onchain here: ${EtherscanURL}${receipt.transactionHash}`
            }

            info["showModal"] = true;
            return info

        } catch (error: any) {
            alert(error.message)
            window.location.reload();
            return info
        }
    }

       
 }

 export { ScavHuntContract }
 export type { GameInfoCostTimeResult }


