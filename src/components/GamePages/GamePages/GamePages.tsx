import React, { useEffect, useState } from "react";
import { GameInfoCostTimeResult, ScavHuntContract } from "../../../contracts/ScavHuntContract/ScavHuntContract";
import { CommonGamePage } from "../CommonGamePage/CommonGamePage";

function TrainingGroundPage() {

    const [result, setResult] = useState<GameInfoCostTimeResult>({
        costPerHunt: 0,
        timePerHunt: 0,
        costPerHuntExpress: 0,
        timePerHuntExpress: 0
    })
     
    useEffect(()=>{
        const getGameCostTimeInfo = async () => {
            const result:GameInfoCostTimeResult = await ScavHuntContract.getGameCostAndTimeInfo('Training Ground')
            setResult(result);
        }
        getGameCostTimeInfo();
    },[])

    return <CommonGamePage  huntCost={result.costPerHunt}
    huntTime={result.timePerHunt}
    expressCost={result.costPerHuntExpress}
    expressTime={result.timePerHuntExpress}
    title = {'TRAINING GROUND'}
    imageURL={'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7f68f76fa4b322249ef6c_Island%201-01.png'}
    prizes= { [ 
        "Prize 1 = 4 $HBC", 
        "Prize 2 = 6 $HBC",
        "Prize 3 = 8 $HBC",
        "Prize 4 = 10 $HBC",
        "Prize 5 = 15 $HBC"
    ] }/>
}

function JewelCoastPage() {
    return <CommonGamePage  huntCost={5}
    huntTime={12}
    expressCost={10}
    expressTime={6}
    title = {'Jewel Coast'}
    imageURL={'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fdadb44031136d259455_Island%202-01.png'}
    prizes= { [ 
        "PRIZE 1 = 8 $HBC",
        "PRIZE 2 = 10 $HBC",
        "PRIZE 3 = 14 $HBC",
        "PRIZE 4 = 16 $HBC",
        "PRIZE 5 - WHITELIST IOU"    
    ] }/>
}

function RiskyFriskyPage() {
    return <CommonGamePage  huntCost={5}
    huntTime={12}
    expressCost={10}
    expressTime={6}
    title = {'Jewel Coast'}
    imageURL={'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fbbb050860a92839fc7a_Island%203-01.png'}
    prizes= { [ 
        "PRIZE 1 - 10 $HBC",
        "PRIZE 2 - 18 $HBC",        
        "PRIZE 3 - 20 $HBC",
        "PRIZE 4 - 0.02 ETH",
        "PRIZE 5 - DREAMLAND GENESIS/HBB"
    ] }/>
}

function CollabIslandPage() {
    return <CommonGamePage  huntCost={5}
    huntTime={12}
    expressCost={10}
    expressTime={6}
    title = {'Jewel Coast'}
    imageURL={'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fd592d601f0c22505b46_Island%204-01.png'}
    prizes= { [ 
        "PRIZE 1 = 15 $HBC",
        "PRIZE 2 = 24 $HBC",
        "PRIZE 3 = 28 $HBC",
        "PRIZE 4 = 30 $HBC",
        "PRIZE 5 = COLLAB NFT IOU"
    ] }/>
}

function DeathTreasurePage() {
    return <CommonGamePage  huntCost={5}
    huntTime={12}
    expressCost={10}
    expressTime={6}
    title = {'Jewel Coast'}
    imageURL={'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d802639d3677ccf3e48a71_Island%205-01.png'}
    prizes= { [ 
        "PRIZE 1 = 20 $HBC",
        "PRIZE 2 = 25 $HBC",
        "PRIZE 3 = 37 $HBC",
        "PRIZE 4 = WHITELIST IOU",
        "PRIZE 5 = 0.02ETH",
        "PRIZE 6 = 0.03ETH",
        "PRIZE 7 = GRAND PRIZE NFT"
    ] }/>
}

export {
     TrainingGroundPage, 
     JewelCoastPage, 
     DeathTreasurePage, 
     CollabIslandPage, 
     RiskyFriskyPage 
}