import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../CommonComponents/BorderLineSeparater";
import { IslandContainer } from "./IslandContainer/IslandContainer";
import { ScavNavHuntFooter } from "./ScavHuntPageFooter/ScavHuntPageFooter";
import { ScavHuntNavBar } from "../CommonComponents/HuntPageNavBar/HuntPageNavBar";

function ScavHuntPage () {
    return  <Container>
        <ScavHuntNavBar/>
        <Logo src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d6a211eb44826879b5510f_Scavenger%20Hunt%20Logo.png'/>
        <MainContainer>
            <IslandContainer 
                title="TRAINING GROUD" 
                backgroundImageURL="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7f68f76fa4b322249ef6c_Island%201-01.png" 
                linkTo="/scav-hunt/training-ground"
                position={ {
                    left: '0%',
                    right: 'auto',
                    top: '0%',
                    bottom: 'auto'
            }}/>
            <IslandContainer 
                title="JEWEL COAST" 
                backgroundImageURL="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fdadb44031136d259455_Island%202-01.png" 
                linkTo="/scav-hunt/jewel-coast"
                position={ {
                    left: 'auto',
                    right: '0%',
                    top: '0%',
                    bottom: 'auto'
            }}/>
            <IslandContainer 
                title="RISKY FRISKY" 
                backgroundImageURL="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fbbb050860a92839fc7a_Island%203-01.png" 
                linkTo="/scav-hunt/risky-frisky"
                position={ {
                    left: '0%',
                    right: 'auto',
                    top: 'auto',
                    bottom: '0%'
            }}/>
            <IslandContainer 
                title="COLLAB ISLAND" 
                backgroundImageURL="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d7fd592d601f0c22505b46_Island%204-01.png" 
                linkTo="/scav-hunt/collab-land"
                position={ {
                    left: 'auto',
                    right: '0%',
                    top: 'auto',
                    bottom: '0%'
            }}/>
            <IslandContainer 
                title="DEATH TREASURE" 
                backgroundImageURL="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d802639d3677ccf3e48a71_Island%205-01.png" 
                linkTo="/scav-hunt/death-treasure"
                position={ {
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0%'
            }}/>
        </MainContainer>
        <Heading>GRAND PRIZE AVAILABLE IN DEATH TREASURE (REDEEMED)</Heading>
        <BorderLineSeperator borderSize="1px" borderWidth="80%"/>
        <ImageGrid>
            <GridImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/620b2de20d10b74cc37aed70_Scroll%2001%20wo%20bg-01.png'/>
            <GridImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6232be1fe5090a7e76358ed1_NANOPASS-p-1080.png'/>
            <GridImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/620b2de20d10b74cc37aed70_Scroll%2001%20wo%20bg-01.png'/>
        </ImageGrid>
        <ScavNavHuntFooter/>
    </Container>
}

const Container = styled.div`
    background-image: url(${'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d6bc67f4ef71eb6924c17b_SH%20BG.png'});
    display: flex;
    flex-direction: column;
    background-size: cover;
`

const Logo = styled.img`
    align-self: center;
    width: 20vw;
    margin-top: -5vw;
`

const MainContainer = styled.div`
    position: relative;
    width:100%;
    margin: 0;
    height: 100vh;
    @media (max-width: 768px) {{
        max-height: 350px;
    }  
`

const Heading = styled.h1`
    width: 70%;
    margin-bottom: 2vh;
    padding-bottom: 1vh;
    color: #fff;
    font-size: 6vh;
    line-height: 6vh;
    align-self: center;
    text-shadow: 4px 4px 4px rgb(0 0 0 / 50%);
    @media (max-width: 768px) {
        font-size: 6vw;
        line-height: 6vw;
        width: 95%;
    }  
`
const ImageGrid = styled.span`
    align-self: center;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    align-items: center;`

const GridImage = styled.img`
    width: 100%;
    border-radius: 20px;
`

export { ScavHuntPage }