import React from "react";
import { BulletedCard } from "./BulletedCard";

function FuturePoints() {
    const bulletedPoints = [
        'Staking for HBC$ is LIVE',
        'Scavenger Game Release (Est. Mid Feburary)',
        'Season 2 Sneak Peek',
        'HBB Insider Group Access'
    ]
    const title = 'WHAT CAN HBB HOLDERS LOOK FORWARD TO';
    return <BulletedCard title={title} bulletPoints={bulletedPoints} />
}

function RoadMapPoints() {
    const bulletedPoints = [
        'HBB Insider Group will be locked',
        'Formation of HBB Alpha Group for all HBB Holders',
        'HBC$ Liquidity Pool Initiation',
        'Launch of MetaMassacre',
        'Launch of Season 2 Merchandise (Exclusive Collectible Figurines)'
    ]
    const title='SEASON 2 ROADMAP'
    return <BulletedCard title={title} bulletPoints={bulletedPoints}/>
}

export {FuturePoints, RoadMapPoints};