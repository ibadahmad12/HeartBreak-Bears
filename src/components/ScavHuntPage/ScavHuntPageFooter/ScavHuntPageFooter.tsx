import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../../CommonComponents/BorderLineSeparater";
import { ScavHuntPageLogo } from "../../CommonComponents/HuntPageNavBar/HuntPageLogo";
import { ScavHuntPageSocial } from "../../CommonComponents/HuntPageNavBar/HuntPageSocial";

function ScavNavHuntFooter() {
    return <Container>
        <BorderLineSeperator borderSize="2px" borderWidth="100%"/>
        <ScavHuntPageSocial/>
        <ScavHuntPageLogo/>
        <Caption>"YOU CAN RUN BUT CAN YOU HIDE?"</Caption>
        <CopyRight>© 2021 Heartbreak Bear. All Rights Reserved.</CopyRight>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 60%;
    justify-content: center;
    align-items: center;
    color: white;
`
const Caption = styled.p`
    color: #333;`
const CopyRight = styled.p`
    margin-top: 0;
    color: #333;
`
export { ScavNavHuntFooter }