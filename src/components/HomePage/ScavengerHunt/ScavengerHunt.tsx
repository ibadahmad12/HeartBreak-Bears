import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ScanvengerHunt() {
    return <Container>
        <Title>SCAVENGER HUNT</Title>
        <CustomImage src={require('./Images/scavhuntimage.png')}/>
        <CustomLink to ='/scav-hunt/scavenger-hunt'>START YOUR HUNT</CustomLink>
        <Text>STAND TO WIN HBC$, WHITELIST OR HIGH VALUE NFTs!</Text>

    </Container>
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    background: url(${require('./Images/scavhungbg.png')});
`
const Title = styled.h2`

`
const CustomImage = styled.img`
    width: 100%;
`

const CustomLink = styled(Link)`
    padding: 9px 15px;
    border: 3px solid white;
    background: #c2ac56;
    font-size: 3vh;
    line-height: 3vh;
    cursor: pointer;
    margin: 0 auto;
    display: inline block;
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    &: hover {
        background: white;
        color: #c2ac56;
        border: 3px solid #c2ac56;
    }
`
const Text = styled.div`
    font-size: 3vh;
    line-height: 3vh;
    text-align: center;
    font-weight: bold;
    padding-top: 3vh;
    padding-bottom: 3vh;
`

export { ScanvengerHunt }
