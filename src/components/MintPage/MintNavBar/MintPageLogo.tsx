import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function MintPageLogo() {
    return (
    <Container>
        <Link to='/'>
         <CustomImage src="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61767d9fc0b337c0236625cb_HBB%20Favicon%20white.svg"/>
        </Link>
    </Container> )
}

const Container = styled.div`
   width: 30px;
   color: white;
`

const CustomImage = styled.img`
    width: 100%;
    color: #333333
    background: transparent;
    filter: invert(0%);
    &:hover{
        filter: brightness(50%);
    }
`
export { MintPageLogo }