import React from "react";
import styled from "styled-components";

function AdventuresWidget() {
    return <Container>
        <Title>HBB ADVENTURES</Title>
        <BoxContainer>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </BoxContainer>
    </Container>
}

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
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    flex-wrap: wrap;
`

const Box = styled.div`
    max-height: 120px;
    max-width: 120px;
    min-height: 120px;
    min-width: 120px;
    margin-right: 1vh;
    margin-left: 1vh;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    @media  (max-width: 768px) {
        max-height: 60px;
        max-width: 60px;
        min-height: 60px;
        min-width: 60px;
        border-radius: 10px;
    }
`

export { AdventuresWidget }