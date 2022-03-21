import React from "react";
import styled from "styled-components";
import { BenefitCard, BenefitCardProps } from "./BenefitCard";


interface Season2BenefitsProps {
    benefitCardProps: BenefitCardProps[];
}

const renderBenefitCards = (benefitCardProps: BenefitCardProps[]) => {
    return benefitCardProps.map((benefitCardProp) => {
        return <BenefitCard imageURL={benefitCardProp.imageURL} text={benefitCardProp.text}/>
    })
}
function Season2Benefits(props: Season2BenefitsProps) {
    return <Container gridSize={props.benefitCardProps.length}>
         {renderBenefitCards(props.benefitCardProps)}
    </Container>
}

const Container = styled.div<{ gridSize: number }>`
    display: grid;
    grid-template-columns: repeat(${p => p.gridSize?p.gridSize: 0}, 1fr);
`

export { Season2Benefits }