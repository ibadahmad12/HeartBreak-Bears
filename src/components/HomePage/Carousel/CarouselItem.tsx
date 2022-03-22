import { truncate } from "fs";
import React, { useState } from "react";
import styled from "styled-components";

interface CarouselItemProps {
    imageURL: string;
}
function CarouselItem (props: CarouselItemProps) {

    const [clicked, setClicked] = useState(false);
    return <ImageContainer onClick={()=>setClicked(true)} clicked={clicked}>
        <CustomImage src={props.imageURL}/>
        <ImageOverlay></ImageOverlay>
    </ImageContainer>
}

const ImageContainer = styled.div<{clicked: boolean}>`
    cursor: pointer;
    flex: 1;
    transition: flex .4s ease-out;
    position: relative;
    &:hover {
        flex: 2;
        opacity: 1;
    }
`;

const CustomImage = styled.img`
    width: 100%;
    object-fit: cover;
    min-height: 400px;
    color: #fff;
    @media (max-width: 768px) {
        min-height: 200px;
    }
`
const ImageOverlay = styled.div`
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: hsla(0, 0%, 100%, 0.3);  
    opacity: 1;
    &:hover {
        background-color: transparent;
    } 
`

export { CarouselItem }