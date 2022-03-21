import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import homebear from "./Images/homebear.png"

function MainSection() {

    return (
    <Container>
        <CustomImage src={homebear}/>
        <TextContainer> 
            <Title>WELCOME TO HEARTBREAK BEAR</Title>      
            <Desc>SEASON1 HBB SOLD OUT!</Desc>
        </TextContainer>      
    </Container>)
}

const randomPercent = [ Math.floor( ( Math.random() * 25 ) + 5 ), Math.floor( ( Math.random() * 25 ) + 5 ), Math.floor( ( Math.random() * 25 ) + 5 ) ];

const Container = styled.div`
    color: #fff;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: -110px;
    z-index: 1000;
    margin-bottom: 15vh;
`
const Title = styled.h1`
    font-size: 6vw; 
    font-weight: bold;
    line-height: 6vw;
    text-align: left;
    font-family: Sovereign, sans-serif;
    margin-left: 0;
    margin-bottom: 0;
    
`
const Desc = styled.h3`
    font-family: Sovereign, sans-serif;
    text-align: left;
    font-family: Sovereign, sans-serif;
    font-size: 2vw; 
    line-height: 4vw;
    margin-top: 0;
    margin-left: 0;`
    

const TextContainer = styled.div`
    align-self:end;
    color: white;
    margin-top: 55vh;
    margin-right: 20%;;
    z-index: 1`

const brightnessAnimation = keyframes`
    0% { filter: brightness(350%); }
    15% { filter: brightness(100%); }
    30% { filter: brightness(300%); }
    50% { filter: brightness(100%); }
`

const CustomImage = styled.img`     
    width: 100%;
    height: 100%;
    //background: transparent;
     // filter: invert(100%);
    margin: 0 auto;
    position: absolute;
    left: 0%;
    top: 1%;
    object-fit: contain;
    //z-index: -1;
    animation-name: ${brightnessAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`

export { MainSection }