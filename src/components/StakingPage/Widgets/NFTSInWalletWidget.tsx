import React from "react";
import styled from "styled-components";
import { CommonWidget } from "./CommonWidget";

function NFTSInWalletWidget() {
    return (<CommonWidget title='NFTS IN WALLET'>
        <StakeLinks>
            <StakeLink>Approve</StakeLink>
            <StakeLink>Stake</StakeLink>
        </StakeLinks>
    </CommonWidget>);
}

const StakeLinks = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    margin: 5px;
    &:hover {
        color: #824b40;
        background: white;
    }
    @media (max-width: 768px) {
        font-size: 2vh;
        line-height: 2vh;
    }
`
export { NFTSInWalletWidget }