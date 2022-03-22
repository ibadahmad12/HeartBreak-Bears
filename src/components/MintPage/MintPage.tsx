import React, { useEffect } from "react";
import styled from "styled-components";
import { MintNavBar } from "./MintNavBar/MintNavBar";
import { SoldOutCard } from "./SoldOutCard/SoldOutCard";


function MintPage() {
    return <Container>
        <MintNavBar/>
        <SoldOutCard/>
        <Note>Note: To protect metadata, newly minted HBB(s) will not be instantly revealed instead, a temporary placeholder will stand in its place. Please be patient as your HBB will take approx. 24-48 hours to be revealed. do not click mint multiple times as it may take some time for transaction to go through. if you are unsure, check with us on discord!</Note>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0;
    height: 100vh;
    flex:1;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${require('./Images/mintpagebg.png')});
    background-size: cover;
    opacity: 0.9;
    padding: 1vh;
    margin-top: -10px;
    margin-bottom: -10px;
    margin-left: -15px;;
    margin-right: -15px;
`

const Note = styled.div`
    font-size: 2vh;
    line-height: 2.5vh;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 768px) {{
        font-size: 1vh;
        line-height: 1.5vh;
    }`
export { MintPage }