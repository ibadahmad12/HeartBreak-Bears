import React from "react";
import styled from "styled-components";

interface BenefitCardProps {
    imageURL: string;
    text: string;
}

function BenefitCard(props: BenefitCardProps) {
    return <Container>
        <CustomImage src={(props.imageURL)}/>
        <Text>{props.text}</Text>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`

const CustomImage = styled.img`
    width: 100%;   
`
const Text = styled.div`
    font-size: 1.5vw;
    line-height: 1.5vw;
`

export { BenefitCard }
export type { BenefitCardProps }