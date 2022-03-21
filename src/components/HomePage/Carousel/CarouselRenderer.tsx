import React from "react";
import { Carousel } from "./Carousel";
import styled from "styled-components";

function CarouselRenderer () {
    const carouselItemList = [];
    carouselItemList.push(require('./Images/polarbearcarousel.png'));
    carouselItemList.push(require('./Images/blackmetalbearcarousel.png'))
    carouselItemList.push(require('./Images/blackbearcarousel.png'));
    return  (<Container>
        <Carousel carouselItemURLS={carouselItemList} />
    </Container>)
   
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export { CarouselRenderer }