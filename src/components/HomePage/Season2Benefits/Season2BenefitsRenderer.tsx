import React from "react";
import styled from "styled-components";
import { BenefitCardProps } from "./BenefitCard";
import { Season2Benefits } from "./Season2Benefits";

function Season2BenefitsRenderer() {
    let benefitCardProps: BenefitCardProps[] = [];
    benefitCardProps.push({
        imageURL:'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61a871902bdc667d7305dc29_mjolnir-01.png',
        text:'ACCESS TO HBB INSIDER GROUP'
    })
    benefitCardProps.push({
        imageURL:'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61a87190488e065b5d23374e_tf1_holy_mackeral-01.png',
        text:'STAKING TO WIN FUTURE REWARDS'
    })
    benefitCardProps.push({
        imageURL:'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/616f9aefc15820f21eaffc12_unicorn%20hammer-01.svg',
        text:'SCAVENGER HUNT TO WIN MORE'
    })
    benefitCardProps.push({
        imageURL:'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61a871907b08f1162db19fcf_buster_sword-01.png',
        text:'DISCORD CHANNEL HAS BEEN LOCKED'
    })

    return <Container>
        <Season2Benefits benefitCardProps={benefitCardProps}/>
    </Container>
}

const Container = styled.div`
    width: 85%;
    padding: 40px;
    color: white;
    margin: 0 auto;
`

export { Season2BenefitsRenderer }