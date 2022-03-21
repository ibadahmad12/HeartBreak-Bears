import React from "react";
import styled from "styled-components";
import Logo from "../../HomePage/NavBar/Logo";
import Social from "../../HomePage/NavBar/Social";
import { MintPageLogo } from "./MintPageLogo";
import MintSocialIcons from "./MintSocialIcons";

function MintNavBar() {
    return <Container>
        <MintPageLogo/>
        <MintSocialIcons/>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    align-items: center;
`

export { MintNavBar }