import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdventuresWidget } from "./AdventuresWidget";
import { CostAndTimeWidget } from "./CostAndTimeWidget";
import { Timer } from "./Timer";

interface CommonGamePageMainSectionProps {
    imageURL: string;
    title: string;
    huntCost: number;
    expressCost: number;
    huntTime: number;
    expressTime: number; 
}


function CommonGamePageMainSection(props: CommonGamePageMainSectionProps) {
    return <Container>
        <CustomLink to='/scav-hunt/scanvenger-hunt'><Logo src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d6a211eb44826879b5510f_Scavenger%20Hunt%20Logo.png'/></CustomLink>
        <BattleImage src={props.imageURL}/>
        <Title>{props.title}</Title>
        <CostAndTimeWidget 
            huntCost={props.huntCost}
            huntTime={props.huntTime}
            expressCost={props.expressCost}
            expressTime={props.expressTime}
        />
        <ConnectMetaMaskLink>CONNECT METAMASK</ConnectMetaMaskLink>
        <Timer hours='00' minutes='00' seconds='00'/>
        <AdventuresWidget/>
    </Container>
}

const BattleImage = styled.img`
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 15%;
    left: 0%;
    right: 0%;
    @media (max-width: 768px) {
        top: 30%;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -10%;
`

const Title = styled.h3`
    z-index: 10;
`

const ConnectMetaMaskLink = styled.a`
    text-decoration: none;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #824b40;
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    cursor: pointer;
    z-index: 10;
    font-size: 2.5vh;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    border: 5px solid #fff;
    margin-top: 4vh;
    margin-bottom: 4vh;
    &:hover {
        color: #824b40;
        background: white;
        border: 5px solid #824b40;;
    }
`
const Logo = styled.img`
    align-self: center;
    width: 20vw;
    margin-top: 5vw;
    z-index: 20;
`
const CustomLink = styled(Link)`
    z-index: 10;
`
export { CommonGamePageMainSection }