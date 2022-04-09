import React from "react";
import styled from "styled-components";

interface PrizesProps {
    prizes: Array<string>;
}

function Prizes (props: PrizesProps) {

    const renderPrizes = (prizes: Array<string>) => {
        return prizes.map((prize) => {
            return <Prize key={prize}>{prize}</Prize>;
    })
    }
    return <Container>
        <Title>PRIZES</Title>
        <ImageGrid>
            <GridImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/620b2de20d10b74cc37aed70_Scroll%2001%20wo%20bg-01.png'/>
            <PrizeList>
               {renderPrizes(props.prizes)}
            </PrizeList>
            <GridImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/620b2de20d10b74cc37aed70_Scroll%2001%20wo%20bg-01.png'/>
        </ImageGrid>

    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 6vh;
    margin-bottom: 0px;
    margin-top: 100px;
`

const ImageGrid = styled.span`
    align-self: center;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    align-items: center;
    @media (max-width: 768px) {
        width: 90%;
        grid-template-columns: 1fr 2fr 1fr;
    }`

const GridImage = styled.img`
    width: 100%;
`
const PrizeList = styled.div`
    display: flex;
    flex-direction: column;
`
const Prize = styled.div`
    font-size: 4vh;
    line-height: 4vh;
    @media (max-width: 768px) {
        font-size: 4vw;
        line-height: 4vw;
    }
`

export { Prizes }
export type { PrizesProps }