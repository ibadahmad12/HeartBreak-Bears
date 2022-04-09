import { Wallet } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WalletContext } from "../../../contexts/WalletContext";
import { ChainID } from "../../../contracts/constants";
import { HBCContract } from "../../../contracts/HBCContract/HBCContract";
import { StakingContract } from "../../../contracts/StakingContract/StakingContract";

function StakeStatistics() {

    const { isWalletConnected, connectToWallet, address, provider }  = useContext(WalletContext);
    const { bonus, 
        setBonus, 
        nftsInWallet, 
        setNFTSInWallet, 
        nftsStaked,
        setNFTSStaked,
        tokensRewarded, 
        setTokensRewarded,
        hbcBalance,
        setHBCBalance,
    } = useContext(WalletContext);

    useEffect(() => {
        if(window.ethereum?.networkVersion == ChainID) {
            connectToWallet();
        }
    }, [window.ethereum?.networkVersion])

    useEffect(()=> {
        const getTokenBalance = async () => {
            const bonus =  await StakingContract.getTokenBalance(address);
            setBonus(bonus);
            const nftsInWallet = await StakingContract.getNFTSInWallet(address);
            setNFTSInWallet(nftsInWallet);
            const nftsStaked = await StakingContract.getStakedNFTS(address);
            setNFTSStaked(nftsStaked);
            const tokensRewarded = await StakingContract.getAvailableReward(address);
            setTokensRewarded(tokensRewarded);
            const hbcBalance = await HBCContract.getHBCBalance(address);
            setHBCBalance(hbcBalance);
        }
        if(isWalletConnected && !bonus){       
          getTokenBalance();
        }  
    },[provider,isWalletConnected])

    return <Container>  
        <Statistic>
            <Title> NFTS STAKED </Title>
            <Value>{ nftsStaked? nftsStaked.length: '--'}</Value>
        </Statistic>
        <Statistic>
            <Title> TOTAL EARNED </Title>
            <Value>{ tokensRewarded? `${tokensRewarded} HBC`: '--'}</Value>
        </Statistic>
        <Statistic>
            <Title> DAILY RATE </Title>
            <Value>1 HBC / DAY</Value>
        </Statistic>
        <Statistic>
            <Title> BONUS </Title>
            <Value>{ bonus || bonus=='0'? `${bonus}% / NFT`: '--'}</Value>
        </Statistic>
        <Statistic>
            <Title> HBCS OWN </Title>
            <Value>{ hbcBalance || hbcBalance=='0'? `${hbcBalance} HBC`: '--'}</Value>
        </Statistic>
    </Container>
}

const Container = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: #f5ead6;
    box-shadow: 2px 2px 3px 3px rgb(0 0 0 / 30%);
    width: 60%;
    min-width: 900px;
    align-self: center;
    margin-top: 4vh;
    align-items: flex-start;
    overflow: hidden;

    @media (max-width: 950px) {
        min-width: 600px
    }
    @media (max-width: 650px) {
        min-width: 400px
    }
`

const Statistic = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 1vh;
    padding-top: 2vh; 
    padding-bottom: 2vh; 
    color: #000;
    &:not(:last-of-type) {
        border-right: 2px solid rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 768px) {
        &:not(:last-of-type) {
            border-right: 0px solid rgba(0, 0, 0, 0.5);
        }
    }
`

const Title = styled.div`
    margin-bottom: 1vh;
    font-size: 2.5vh;
    line-height: 2.5vh;
    @media (max-width: 1000px) {
        font-size: 2.0vh;
        line-height: 2.0vh;
    }
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }
`

const Value = styled.div`
    font-size: 2.5vh;
    line-height: 2.5vh;
    @media (max-width: 1000px) {
        font-size: 2.0vh;
        line-height: 2.0vh;
    }
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }`

export { StakeStatistics }