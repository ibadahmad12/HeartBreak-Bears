import React from "react";
import styled from "styled-components";

function StakeStatistics() {
    return <Container>  
        <Statistic>
            <Title> NFTS STAKED </Title>
            <Value>---</Value>
        </Statistic>
        <Statistic>
            <Title> TOTAL EARNED </Title>
            <Value>---</Value>
        </Statistic>
        <Statistic>
            <Title> DAILY RATE </Title>
            <Value>1 HBC / DAY</Value>
        </Statistic>
        <Statistic>
            <Title> BONUS </Title>
            <Value>---</Value>
        </Statistic>
        <Statistic>
            <Title> HBCS OWN </Title>
            <Value>---</Value>
        </Statistic>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    background-color: #f5ead6;
    box-shadow: 2px 2px 3px 3px rgb(0 0 0 / 30%);
    width: 80%;
    align-self: center;
    margin-top: 4vh;
    flex-wrap: wrap;
    max-width: 800px;
    align-items: flex-start;
`

const Statistic = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 2vh;  
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
    font-size: 3vh;
    line-height: 3vh;
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }
`

const Value = styled.div`
    font-size: 3vh;
    line-height: 3vh;
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }`

export { StakeStatistics }