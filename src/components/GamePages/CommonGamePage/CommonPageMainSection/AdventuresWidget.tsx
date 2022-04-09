import React from "react";
import styled from "styled-components";
import { IPFSLink } from "../../../../contracts/constants";

interface ChildrenProps  {
    nftsInWallet: string[];
    onClick: Function;
    selectedNft: string;
}

function AdventuresWidget({nftsInWallet, onClick, selectedNft} : ChildrenProps) {

    const highlight = {
        borderWidth: "5px",
        borderStyle: "solid",
        // backgroundColor: "green",
        borderColor: "green"
      };
      const noHighlight = {
        borderWidth: "0px",
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderColor: "transparent"
      };

    const nftItems = nftsInWallet.map((nft) => <Box key={nft} onClick={() => {onClick(nft)}}><Image style={ selectedNft == nft ? highlight : noHighlight} src={`${IPFSLink}${nft}.png`}/></Box>);

    return <Container>
        <Title>HBB ADVENTURES</Title>
        <BoxContainer>
            {nftItems}
        </BoxContainer>
    </Container>
}

const Image = styled.img`
    max-height: 200px;
    max-width: 200px;
    border-radius: 20px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #f5ead6;
    box-shadow: 2px 2px 3px 3px rgb(0 0 0 / 30%);
    z-index: 10;
    margin: 0 auto;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 60%;
`


const Title = styled.h1`
    color: #000;
    font-size: 4vh;
    line-height: 4vh;   
    @media (max-width:768px) {
        font-size: 2vh;
        line-height: 1.5vh;
    }

`

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 5vh;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Box = styled.div`
    max-height: 200px;
    max-width: 200px;
    min-height: 120px;
    min-width: 120px;
    margin-right: 1vh;
    margin-left: 1vh;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    margin: 5px;
    @media  (max-width: 768px) {
        max-height: 60px;
        max-width: 60px;
        min-height: 60px;
        min-width: 60px;
        border-radius: 10px;
    }
`

export { AdventuresWidget }