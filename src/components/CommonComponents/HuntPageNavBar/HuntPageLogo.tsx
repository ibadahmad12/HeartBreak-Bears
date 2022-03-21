import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function ScavHuntPageLogo() {
    return (
    <Container>
        <Link to='/'>
         <CustomImage src="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166a09d7fab1b6a26c97dd6_LOGO-main.png"/>
        </Link>
    </Container> )
}

const Container = styled.div`
   width: 80px;
   color: white;
   @media(max-width:768px) {
       width: 50px;
   }
`

const CustomImage = styled.img`
    width: 100%;
    color: #333333
    background: transparent;
    filter: invert(100%);
`
export { ScavHuntPageLogo }