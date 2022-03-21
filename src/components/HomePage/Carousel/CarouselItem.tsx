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
    max-width: 600px;
    cursor: pointer;
`;

const CustomImage = styled.img`
    width: 100%;
    background: transparent;
`

export { CarouselItem }