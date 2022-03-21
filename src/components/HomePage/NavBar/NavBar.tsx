import React from "react";
import styled from 'styled-components';
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";


function NavBar() {
    return (
        <Container>
            <Logo/>
            <Menu/>
            <Social/> 
        </Container>
    )    
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    color: white;
    z-index: 1000;
    position: relative;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }
`

export default NavBar;