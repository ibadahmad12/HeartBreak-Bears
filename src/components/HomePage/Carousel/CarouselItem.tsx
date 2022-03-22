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
    </ImageContainer>
}

const ImageContainer = styled.div<{clicked: boolean}>`
    cursor: pointer;
    flex: 1;
    transition: flex .4s ease-out;
    opacity: 0.6;
    color: white;
    &:hover {
        flex: 2;
        opacity: 1;
    }
`;

const CustomImage = styled.img`
    width: 100%;
    background: transparent;
    object-fit: cover;
    min-height: 400px;
    @media (max-width: 768px) {
        min-height: 200px;
    }
`

export { CarouselItem }