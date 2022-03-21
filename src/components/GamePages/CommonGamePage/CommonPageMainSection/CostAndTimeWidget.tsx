import React from "react";
import styled from "styled-components";
import { ShorthandPropertyAssignment } from "typescript";

interface CostAndTimeWidgetProps {
    huntCost: number;
    expressCost: number;
    huntTime: number;
    expressTime: number;
}

function CostAndTimeWidget(props: CostAndTimeWidgetProps) {
    return <Container>
        <CostWidget>
            <Title>COST PER HUNT</Title>
            <InfoText>{`HUNT = ${props.huntCost} HBC`}</InfoText>
            <InfoText>{`EXPRESS = ${props.expressCost} HBC`}</InfoText>
        </CostWidget>
        <TimeWidget>
             <Title>COST PER HUNT</Title>
            <InfoText>{`HUNT = ${props.huntTime} HRS`}</InfoText>
            <InfoText>{`EXPRESS = ${props.expressTime} HRS`}</InfoText>
        </TimeWidget>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    align-self: center;
    background: hsla(0, 0%, 100%, 0.69);
    border-radius: 20px;
    padding: 30px;
    z-index: 10;
    @media (max-width: 768px) {
        width: 70%;
        flex-direction: column;
    }
`

const CostWidget = styled.div`
`

const TimeWidget = styled.div``

const Title = styled.h4`
    font-size: 3vh;
    line-height: 3vh;
    color: #824b40;
    margin: 0;`

const InfoText = styled.p`
    color: #000;
    font-size: 1.5vh;
    line-height: 1.5vh;`

export { CostAndTimeWidget }