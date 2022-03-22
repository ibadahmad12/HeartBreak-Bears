import React from "react";
import styled from "styled-components";
import { ScavNavHuntFooter } from "../../ScavHuntPage/ScavHuntPageFooter/ScavHuntPageFooter";
import { ScavHuntNavBar } from "../../CommonComponents/HuntPageNavBar/HuntPageNavBar";
import { CommonGamePageMainSection } from "./CommonPageMainSection/CommonGamePageMainSection";
import { Prizes, PrizesProps } from "./Prizes";


interface CommonGamePageProps {
    imageURL: string;
    title: string;
    huntCost: number;
    expressCost: number;
    huntTime: number;
    expressTime: number;
    prizes: Array<string>;
}

function CommonGamePage(props: CommonGamePageProps) {
    return <Container>
        <ScavHuntNavBar/>
        <CommonGamePageMainSection huntCost={props.huntCost}
            huntTime={props.huntTime}
            expressCost={props.expressCost}
            expressTime={props.expressTime}
            title = {props.title}
            imageURL={props.imageURL}/>
        <Prizes prizes={props.prizes}   />
        <ScavNavHuntFooter/>
    </Container>
}

const Container = styled.div`
    background-image: url(${'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61d6bc67f4ef71eb6924c17b_SH%20BG.png'});
    display: flex;
    flex-direction: column;
    background-size: cover;
    margin-left: -18px;
    margin-right: -18px;
    margin-top: -10px;
    margin-bottom: -10px;
`

export { CommonGamePage }