import React from "react";
import styled from "styled-components";
import { CarouselItem } from "./CarouselItem";

interface CarouselProps  {
    carouselItemURLS: string[];
}

const renderCarouselItems = (carouselItemURLs: string[]) => {
    return (carouselItemURLs.map((carouselItemURL: string) => {
        return <CarouselItem imageURL={carouselItemURL}></CarouselItem>
    })
    )};
function Carousel(props: CarouselProps) {
    return <Container gridSize={props.carouselItemURLS.length}>
        {renderCarouselItems(props.carouselItemURLS)}
    </Container>
}

const Container = styled.div<{ gridSize: number }>`
    display: flex;
`

export { Carousel }