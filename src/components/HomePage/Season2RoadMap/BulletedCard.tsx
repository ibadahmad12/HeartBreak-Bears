import React from "react";
import styled from "styled-components";

interface BulletedCardProps {
    title: string;
    bulletPoints: string[];
}


const renderBulletPoints = (bulletPoints: string[]) => {
    return bulletPoints.map((bulletPoint) => {
        return <BulletPoint>{bulletPoint}</BulletPoint>
    })

}
function BulletedCard(props: BulletedCardProps) {
    return <Container>
        <Title>{props.title}</Title>
        <BulletContainer>{renderBulletPoints(props.bulletPoints)}</BulletContainer>
    </Container>
}

const Container = styled.div`
    text-align: left;
    max-width: 700px;
    margin-left: 20%;
    @media (max-width: 768px) {
        margin-left: 0%;
        margin: 0 auto;
        width: 85%;
    }
`

const BulletContainer  = styled.div`
    text-align: left;  
    @media (max-width: 768px) {
        margin-left: 0%;
        margin: 0 auto;
        width: 85%;
    } 
`
const Title = styled.h4`
    color: #f2b880;
    font-size: 4vh;
    line-height: 3vw;    
    margin: 0;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 2vh;
       line-height: 2vh; 
       text-align: center;
    }
`

const BulletPoint = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:before {
        content: url(${'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61a864a377ffcc48984ee203_Indent-01.svg'});
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }
    font-family: Hkgrotesk, sans-serif;
    margin: 20px;
    @media (max-width: 768px) {
       font-size: 1.3vh;
       line-height: 1.3vh; 
       font-weight: normal;
       margin: 15px;
       text-align: center;
    }
`

export { BulletedCard };