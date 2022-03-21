import React from "react";
import styled from "styled-components";
import { ScavHuntNavBar } from "../CommonComponents/HuntPageNavBar/HuntPageNavBar";
import { StakeStatistics } from "./StakeStatistics/StakeStatistics";
import { NFTSInWalletWidget } from "./Widgets/NFTSInWalletWidget";
import { NFTSStakedWidget } from "./Widgets/NFTSStakedWidget";

function StakingPage () {
    return <Container>
        <ScavHuntNavBar/>
        <Heading>
            <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61af6154bb62124414b25fee_Mini%20HBC-01.png'/>
            <HeaderText>HBB STAKING DASHBOARD</HeaderText>
            <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61af6154bb62124414b25fee_Mini%20HBC-01.png'/>
        </Heading>
        <StakeStatistics/>
        <ConnectMetaMaskLink>CONNECT WALLET</ConnectMetaMaskLink>
        <NFTSInWalletWidget/>
        <NFTSStakedWidget/>

    </Container>
}

const Container = styled.div`
    background: url(${`https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61af7829a3f1ed44d1907095_Staking%20BG-01-01.png`}) no-repeat fixed;;
    display: flex;
    flex-direction: column;
    background-size: cover;
`
const Heading = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    width: 50%;
    align-items: center;
    justify-items: center;
    align-self: center;
    max-width: 100%;
    @media (max-width:768px) {
        width: 80%;
    }`

const CustomImage = styled.img`
    width: 70px;
    @media (max-width:768px) {
        width: 30px;
    }
`

const HeaderText = styled.div`
    font-size: 5vh;
    line-height: 5vh;
    @media (max-width:768px) {
        font-size: 2vh;
        line-height: 2vh;
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
    font-size: 3vh;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    &:hover {
        color: #824b40;
        background: white;
    }
`

export { StakingPage }