import React from "react";
import "./Images/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu() {

    const navigateToRoadMap = () => {
        const roadMap = document.getElementById('roadmap')
        if(roadMap) {
           roadMap.scrollIntoView({behavior: "smooth"});
        }
    }

    const navigateToTeam = () => {
        const team = document.getElementById('team')
        if(team) {
           team.scrollIntoView({behavior: "smooth"});
        }
    }

    const navigateToFAQ = () => {
        const faq = document.getElementById('faq')
        if(faq) {
           faq.scrollIntoView({behavior: "smooth"});
        }
    }

    return <Container>
        <CustomLink to='/' >HOME</CustomLink>
        <CustomLink to='/' onClick={navigateToRoadMap}>ROADMAP</CustomLink>
        <CustomLink to='/mint'>MINT</CustomLink>
        <CustomLink to='/staking'>STAKING</CustomLink>
        <CustomLink to='/scav-hunt/scavenger-hunt'>SCAVHUNT</CustomLink>
        <CustomLink to='/' onClick={navigateToFAQ}>FAQ</CustomLink>
        <CustomLink to='/' onClick={navigateToTeam}>TEAM</CustomLink>
    </Container>
}

const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 2vh;
    line-height: 2vh;
    &:hover {
      color: #e801c3;
     }
    @media (max-width: 768px) {
        text-align: center;
        font-zie: 1vh;
        line-height: 1vh;
     }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4vw;
    @media (max-width: 768px) {
       text-align: center;
       gap: 1vh;
    }
    @media (max-width: 600px) {
        flex-direction: column;
     }
`
export default Menu;