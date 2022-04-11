import React, { ReactChild, ReactChildren, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WalletContext } from "../../../../contexts/WalletContext";
import { HBCContract } from "../../../../contracts/HBCContract/HBCContract";
import { msToHMS, ScavHuntContract } from "../../../../contracts/ScavHuntContract/ScavHuntContract";
import { StakingContract } from "../../../../contracts/StakingContract/StakingContract";
import { AdventuresWidget } from "./AdventuresWidget";
import { CostAndTimeWidget } from "./CostAndTimeWidget";
import { Timer } from "./Timer";
import Modal from 'react-modal';
import { ChainID } from "../../../../contracts/constants";

interface CommonGamePageMainSectionProps {
    imageURL: string;
    title: string;
    huntCost: number;
    expressCost: number;
    huntTime: number;
    rawHuntTime: number;
    expressTime: number;
    expressFactor: number;
}

export type RewardInfo = {
    heading: string,
    subheading: string,
    subheading2: string,
    miniText: string,
    showModal: boolean,
}

function CommonGamePageMainSection(props: CommonGamePageMainSectionProps) {

    const { isWalletConnected, connectToWallet, address, nftsInWallet, setNFTSInWallet, provider } = useContext(WalletContext);
    const [selectedNFT, setSelectedNFT] = useState<string>('');
    const [huntTimer, setHuntTimer] = useState<string>(`00:00:00`);
    const [showEndHuntButton, setShowEndHuntButton] = useState(false);
    const [showApproveButton, setShowApproveButton] = useState(false);
    const [showExpressHuntButton, setShowExpressHuntButton] = useState(false);
    const [showHuntButton, setShowHuntButton] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [rewardsInfo, setRewardsInfo] = useState<RewardInfo>({
        heading: "string",
        subheading: "string",
        subheading2: "string",
        miniText: "string",
        showModal: false,
    });

    useEffect(() => {
        if(window.ethereum?.networkVersion == ChainID) {
            connectToWallet();
        }
    }, [window.ethereum?.networkVersion])
    useEffect(() => {
        const getNfts = async () => {
            const nftsInWallet = await StakingContract.getNFTSInWallet(address);
            setShowApproveButton(!(await HBCContract.hasApprovedHBC(address)))
            setNFTSInWallet(nftsInWallet);
            setHuntTimer("Select an NFT to hunt");
        }
        if (isWalletConnected) {
            setHuntTimer("Loading...");
            getNfts();
        }
    }, [provider, isWalletConnected])

    const renderAddress = (address: string) => {
        return address.substring(0, 5) + "..." + address.substring(address.length - 4, address.length);
    }

    async function getInfo(tokenId: string) {
        setSelectedNFT(tokenId);
        const gameName = props.title;
        setHuntTimer("Loading...");
        const gameInfo = await ScavHuntContract.getGameInfo(tokenId, gameName).then((gameInfo) => {

            if (gameInfo.timestamp.gt(0) && gameInfo.gameName == gameName) {
                console.log("1");
                let startTime = gameInfo.timestamp * 1000
                let now = Date.now()
                let diff = now - startTime
                let scavengerHuntGameDuration = props.rawHuntTime * 1000
                let duration = gameInfo.isExpress ? (scavengerHuntGameDuration / props.expressFactor) : scavengerHuntGameDuration
                let scavengerHuntTimeRemaining = duration - diff
                setTimeRemaining(scavengerHuntTimeRemaining)
                console.log("Duration: ",scavengerHuntGameDuration)
                console.log(scavengerHuntTimeRemaining, duration, diff)
                if (scavengerHuntTimeRemaining > 0 && diff > 0) {
                    console.log("1.1");
                    setHuntTimer(`${msToHMS(scavengerHuntTimeRemaining)}`)
                } else {
                    console.log("1.2");
                    setHuntTimer(`00:00:00`)
                }

                setShowEndHuntButton(true)
                setShowExpressHuntButton(false)
                setShowHuntButton(false)

            } else if (gameInfo.timestamp.gt(0) && gameInfo.gameName != gameName) {
                console.log("2");
                setHuntTimer(`HUNTING ON ${gameInfo.gameName.toUpperCase()}`)
                setShowEndHuntButton(false)
                setShowExpressHuntButton(false)
                setShowHuntButton(false)
            } else {
                console.log("3");
                setHuntTimer(`00:00:00`)
                setShowEndHuntButton(false)
                setShowExpressHuntButton(true)
                setShowHuntButton(true)
            }
        });

    }

    async function approve() {
        setHuntTimer("Loading...");
        HBCContract.approveUnlimitedHBCTokens()
    }

    async function hunt(express: boolean) {
        setHuntTimer("Loading...");
        ScavHuntContract.hunt(props.title, selectedNFT, express)
    }

    async function endHuntAndGetRewardInfo() {
        setHuntTimer("Loading...");
        let rewardsInfo = await ScavHuntContract.endHunt(props.title, selectedNFT, timeRemaining)
        setRewardsInfo(rewardsInfo)
    }
    return <Container>
        <CustomLink><a href='/scav-hunt/scavenger-hunt'><Logo src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d6a211eb44826879b5510f_Scavenger%20Hunt%20Logo.png' /></a></CustomLink>
        <BattleImage src={props.imageURL} />
        <Title>{props.title}</Title>
        <CostAndTimeWidget
            huntCost={props.huntCost}
            huntTime={props.huntTime}
            expressCost={props.expressCost}
            expressTime={props.expressTime}
        />
        {!isWalletConnected ? <ConnectMetaMaskLink onClick={() => connectToWallet()}>CONNECT WALLET</ConnectMetaMaskLink> : <ConnectMetaMaskLink>{renderAddress(address)}</ConnectMetaMaskLink>}

        <HuntButtonsWrapper>
            {showApproveButton && <HuntButton onClick={() => approve() }>APPROVE</HuntButton>}
            {showHuntButton && <HuntButton onClick={() => hunt(false)}>HUNT</HuntButton>}
            {showExpressHuntButton && <HuntButton onClick={() =>hunt(true)}>EXPRESS HUNT</HuntButton>}
            {showEndHuntButton && <HuntButton onClick={async () => endHuntAndGetRewardInfo()}>END HUNT</HuntButton>}
        </HuntButtonsWrapper>


        <Timer time={huntTimer} />
        <AdventuresWidget nftsInWallet={nftsInWallet} onClick={getInfo} selectedNft={selectedNFT} />
        <Modal
            isOpen={rewardsInfo.showModal}
            onRequestClose={() => {window.location.reload()}}
            style={{
                overlay: {
                    zIndex: 99999,
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#000',
                    borderRadius: '40px',
                    backgroundColor: '#F5EAD6',
                }
            }} contentLabel="Winner Modal"
        >
            <Title style={{ textAlign: "center" }}> {rewardsInfo.heading}</Title>
            <SubTitle> {rewardsInfo.subheading} </SubTitle>
            <SubTitle> {rewardsInfo.subheading2} </SubTitle>
            <MiniText> {rewardsInfo.miniText} </MiniText>
            <CloseButton onClick={() => {window.location.reload()}}><b>✖</b></CloseButton>
        </Modal>
    </Container>

}

const BattleImage = styled.img`
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 15%;
    left: 0%;
    right: 0%;
    @media (max-width: 768px) {
        top: 30%;
    }
`

const HuntButtonsWrapper = styled.div`
    display: inline-block;
    position: relative;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -10%;
`
const CloseButton = styled.a`
    color: #777;
    font: 18px/100% arial, sans-serif;
    position: absolute;
    right: 25px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 25px;
    cursor: pointer;
`

const Title = styled.h1`
    z-index: 10;
    font-size: 5vh;
`

const SubTitle = styled.h2`
    z-index: 10;
    font-size: 4vh;
    text-align: center;
`
const MiniText = styled.p`
    z-index: 10;
    font-size: 1vh;
    text-align: center;

`
const HuntButton = styled.a`
    text-decoration: none;
    border-radius: 20px;
    background-color: #c2ac56;
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    cursor: pointer;
    z-index: 10;
    font-size: 2.5vh;
    text-align: center;
    box-sizing: border-box;
    border: 5px solid #fff;
    margin-bottom: 4vh;
    margin-left: 10px;
    &:hover {
        color: #c2ac56;
        background: white;
        border: 5px solid #c2ac56;;
    }
`

const ConnectMetaMaskLink = styled.a`
    text-decoration: none;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #824b40;
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    cursor: pointer;
    z-index: 10;
    font-size: 2.5vh;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    border: 5px solid #fff;
    margin-top: 4vh;
    margin-bottom: 4vh;
    &:hover {
        color: #824b40;
        background: white;
        border: 5px solid #824b40;;
    }
`
const Logo = styled.img`
    align-self: center;
    width: 20vw;
    margin-top: 5vw;
    z-index: 20;
`
const CustomLink = styled.div`
    z-index: 10;
`
export { CommonGamePageMainSection }
