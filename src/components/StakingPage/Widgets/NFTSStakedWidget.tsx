import React from "react";
import styled from "styled-components";
import { CommonWidget } from "./CommonWidget";

function NFTSStakedWidget() {
    return (<CommonWidget title='NFTS STAKED'>
        <StakeLinks>
            <StakeLink>UNSTAKE</StakeLink>
            <StakeLink>UNSTAKE ALL</StakeLink>
            <StakeLink>CLAIM TOKENS</StakeLink>
        </StakeLinks>
    </CommonWidget>);
}

const StakeLinks = styled.div`
    display:flex;
    flex-direction:row
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
`

const StakeLink = styled.a`
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;
    background-color: #824b40;
    font-size: 3vh;
    line-height: 3vh;
    text-align: center;
    padding: 9px 15px;
    color: white;
    margin: 5px;
    cursor: pointer;
    &:hover {
        color: #824b40;
        background: white;
    }
    @media (max-width:768px) {
        font-size: 2vh;
        line-height: 2vh;
    }
`
export { NFTSStakedWidget }