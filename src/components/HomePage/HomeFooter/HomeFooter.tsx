import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../../CommonComponents/BorderLineSeparater";
import Logo from "../NavBar/Logo";
import Social from "../NavBar/Social";

function HomeFooter() {
    return <Container>
        <BorderLineSeperator borderSize="2px" borderWidth="100%"/>
        <Social/>
        <Logo/>
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
const Caption = styled.p``
const CopyRight = styled.p`
    margin-top: 0;
    color: #333;
`
export { HomeFooter }