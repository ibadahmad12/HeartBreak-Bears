import React from "react";
import styled from "styled-components";
import Logo from "../../HomePage/NavBar/Logo";
import Social from "../../HomePage/NavBar/Social";
import { ScavHuntPageLogo } from "./HuntPageLogo";
import { ScavHuntPageSocial } from "./HuntPageSocial";

function ScavHuntNavBar() {
    return <Container>
        <ScavHuntPageLogo/>
        <ScavHuntPageSocial/>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    align-items: center;
    z-index: 10;
`

export { ScavHuntNavBar }