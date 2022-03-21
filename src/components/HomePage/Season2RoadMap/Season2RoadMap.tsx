import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../../CommonComponents/BorderLineSeparater";
import { FuturePoints, RoadMapPoints } from "./RoadMapCards";
function Season2RoadMap() {
    return <section id='roadmap'>
    <Container>
        <BorderLineSeperator borderSize="0.25px" borderWidth="80%"/>
        <Heading>HBB SEASON 2</Heading>
        <FuturePoints/>
        <RoadMapPoints/>
        <UpdateText>
            HBB Holders will be able to decide on updates on the Roadmap as we go along and hold more AMAs and community discussions!
        </UpdateText>
        <ImprovementText>
            Roadmap is subject to change as we continue to receive feedback for improvement from the community!
        </ImprovementText>
    </Container>
    </section>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`

const Heading = styled.div`
    font-size: 10vw;
    line-height: 12vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 9vw;
        line-height: 9vw;
    }
`

const UpdateText = styled.div`
    font-size: 2vw;
    line-height: 2vw;
    text-align: center;
    margin: 2vh auto;
    width: 80%;
    @media (max-width: 768px) {
        font-size: 4vw;
        line-height: 4vw;
    }
`

const ImprovementText = styled.div`
    font-family: Hkgrotesk, sans-serif;
    font-size: 1.5vw;
    line-height: 1.5vw;
    margin: 2vw auto;
    width: 80%;
    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 3vw;
    }
`
export {Season2RoadMap};