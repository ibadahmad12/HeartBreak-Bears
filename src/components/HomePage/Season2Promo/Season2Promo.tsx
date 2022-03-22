import React from "react";
import styled from 'styled-components';

function Season2Promo() {
    return (
    <Container>
         <Title>MOVING TOWARDS SEASON 2</Title>
         <CustomImage src={require('./Images/season2promo.png')}/>
         <Heading>HBB Aims to build a lifelong brand incorporating real world and blockchain utility</Heading>
         <Text>7,089 Season 2 HBBs<br/>Mint Date : TBA</Text>
    </Container> )
}
export default Season2Promo;

const Container = styled.div`
   width: 80%;
   color: #333333;
   margin: 0 auto;
`

const CustomImage = styled.img`
    width: 70%;
    color: #333333
    background: transparent;
`
const Title = styled.h1`
    color: white;
    margin-block-end: 0px;
    font-size: 7vh;
    @media (max-width: 768px) {
        font-size: 3vh;
    }
`

const Heading = styled.div`
    font-size: 4vh;
    line-height: 4vh;
    text-align: center; 
    color: white;
    margin-bottom: 5vh;
    @media (max-width:768px) {
        font-size: 2vh;
        line-height: 2vh;
        margin-bottom: 3vh;
    }
`

const Text = styled.div`
    font-family: Hkgrotesk, sans-serif;
    font-size: 2.5vh;
    line-height: 2.5vh;
    color: white;
    margin-bottom: 5vh;
    @media (max-width:768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
        margin-bottom: 3vh;
    }
`