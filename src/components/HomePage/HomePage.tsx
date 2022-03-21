import React from "react";
import styled  from "styled-components";
import { Season2RoadMap } from "./Season2RoadMap/Season2RoadMap";
import { BearTeam } from "./BearTeam/BearTeam";
import { CarouselRenderer } from "./Carousel/CarouselRenderer";
import { FAQ } from "./FAQ/FAQ";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { MainSection } from "./MainSection/MainSection";
import NavBar from "./NavBar/NavBar";
import { ScanvengerHunt } from "./ScavengerHunt/ScavengerHunt";
import { Season2BenefitsRenderer } from "./Season2Benefits/Season2BenefitsRenderer";
import Season2Promo from "./Season2Promo/Season2Promo";

function HomePage() {
    return <Container>
          <NavBar/>
          <MainSection/>
          <Season2Promo/>
          <CarouselRenderer />
          <Season2BenefitsRenderer/>
          <ScanvengerHunt/>
          <Season2RoadMap/> 
          <FAQ/>
          <BearTeam/>  
          <HomeFooter/>  
    </Container>
}

const Container = styled.div`
    width:100%;
    margin: 0;
`

export { HomePage }