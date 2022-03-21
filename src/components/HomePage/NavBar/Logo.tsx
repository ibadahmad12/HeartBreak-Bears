import React from "react";
import styled from 'styled-components';

function Logo() {
    return (
    <Container>
         <CustomImage src={require("./Images/logoimage.png")} loading="lazy" width="100" sizes="(max-width: 479px) 74vw, (max-width: 991px) 100px, 7vw" srcSet="https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166a09d7fab1b6a26c97dd6_LOGO-main-p-500.png 500w, https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166a09d7fab1b6a26c97dd6_LOGO-main.png 1080w"/>
    </Container> )
}
export default Logo;

const Container = styled.div`
   width: 100px;
   color: #333333;
`

const CustomImage = styled.img`
    width: 100%;
    color: #333333
    background: transparent;
    filter: invert(100%);
`