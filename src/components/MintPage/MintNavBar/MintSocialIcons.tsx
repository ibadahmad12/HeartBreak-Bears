import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MintSocialIcons() {
    return (<Container>
        <CustomLink to={{pathname:'https://opensea.io/collection/heartbreak-bear-official'}} target="_blank">
            <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61a9cc61d78e994d01b7e7e6_opensea%20mini.svg'/>
        </CustomLink>
        <CustomLink to={{pathname: 'https://discord.com/invite/eHacKeJad2'}} target="_blank">
             <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6176717728685f9bcb64ab02_discord%20mini.svg'/>
        </CustomLink>
        <CustomLink to={{pathname: 'https://www.instagram.com/heartbreakbear.nft/'}} target="_blank">
             <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/617671771080df6b79a3e36f_insta%20mini.svg'/>
        </CustomLink>
        <CustomLink to = {{ pathname: "https://twitter.com/Heartbreak_bear" }} target="_blank">
             <CustomImage src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/61767176ecd1e03cca259d7c_twitter%20mini.svg'/>
        </CustomLink>
    </Container>)
}

const Container = styled.div`
    display: flex;
    flex-direction: row
    color: white;
    justify-self: end;
    gap: 5px;
`
const CustomImage = styled.img`
    width: 100%;
    color: #333341;
    filter: sepia(100%);
`
const CustomLink = styled(Link)`
    width: 30px;
    fill: white;
    &:hover{
        filter: brightness(50%);
    }
`
export default MintSocialIcons;

