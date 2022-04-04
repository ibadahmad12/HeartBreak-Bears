import { ethers } from "ethers";
import { alchemyNetworkProviderURL } from "../constants";
import { ScavHuntAbi } from "./ScavHuntAbi";

interface GameInfoCostTimeResult {
    costPerHunt: number;
    timePerHunt: number;
    costPerHuntExpress: number;
    timePerHuntExpress: number;
}

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

class ScavHuntContract {
    static ScavHuntContractAddress = '0xD42C6826C7F5284777726a75EbaFf10Bb4Ea0A67';
    static async getGameCostAndTimeInfo(gameName: string) {

        let ScavengerHuntInstance = new ethers.Contract(
            ScavHuntContract.ScavHuntContractAddress,
            ScavHuntAbi,
            new ethers.providers.JsonRpcProvider(alchemyNetworkProviderURL)
        );

        let scavengerGameInfo = await ScavengerHuntInstance.getGame(gameName);
        //let scavengerHuntGameDuration = scavengerGameInfo.duration * 1000
        //let scavengerHuntExpressFactor = (await ScavengerHuntInstance.expressFactor()).toNumber()

        const result: GameInfoCostTimeResult = {
            costPerHunt: parseInt(ethers.utils.formatEther(scavengerGameInfo.cost)),
            costPerHuntExpress: parseInt(ethers.utils.formatEther(scavengerGameInfo.cost.mul('2'))),
            timePerHunt: parseInt(secondsToHms(scavengerGameInfo.duration)),
            timePerHuntExpress:  parseInt(secondsToHms(scavengerGameInfo.duration.div('2')))
        }
        return result;
    }

       
 }

 export { ScavHuntContract }
 export type { GameInfoCostTimeResult }


