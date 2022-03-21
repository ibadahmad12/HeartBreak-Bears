import React from "react";
import styled from "styled-components";

function SoldOutCard() {
    return <Container>
        <CustomImage src={require('./Images/soldoutimage.png')}/>
        <Text>????/????</Text>
        <SOLDOUTTEXT>SOLDOUT</SOLDOUTTEXT>
        <SEASON2UPDATE>Stay tuned for Season 2!</SEASON2UPDATE>
    </Container>
}

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50px;
    padding: 2%;
    margin-bottom: 5%;
    vertical-align: center;
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 40%;
        padding-top: 20%;
        padding-bottom: 20%;
    }
`
const CustomImage = styled.img`
    width: 100%;
    
`
const Text = styled.div`
    font-size: 8vh;
    line-height: 10vh;
    @media (max-width: 768px) {
        font-size: 3vh;
        line-height: 5vh;
    }`
const SOLDOUTTEXT = styled.div`
    font-size: 10vh;
    line-height: 10vh;
    text-shadow: 3px 3px 2px #000;
    @media (max-width: 768px) {
        font-size: 4vh;
        line-height: 4vh;
    }`    
const SEASON2UPDATE  = styled.div`
    font-size: 3vh;
    line-height: 3vh;
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }`

export { SoldOutCard }