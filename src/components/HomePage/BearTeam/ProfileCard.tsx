import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import styled from "styled-components";

interface ProfileCardProps {
    bearImage : string;
    profileImage: string;
    name: string;
    role: string;
}
function ProfileCard (props: ProfileCardProps) {

    const [hover, setHover] = useState(false);

    return <Container>
        <ImageContainer hover = {hover}>
            <CustomImage 
                bearImage = {props.bearImage}
                profileImage = {props.profileImage}
                hover = {hover}
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                src={hover?props.profileImage:props.bearImage}
                />
        </ImageContainer>
        <Name>{props.name}</Name>
        <Role>{props.role}</Role>
    </Container>
}

const Container = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    
`
const ImageContainer = styled.div<{hover: boolean}>`
    padding: 15px;
    width: 15vw;
    border-raidus: ${p=>p.hover? '50%':'20%'};
`
const CustomImage = 
    styled.img<{bearImage: string, profileImage: string, hover: boolean}>`
    width: 100%;
    height: 100%;
    transition: all .2s ease-in-out;
    border-radius: 15px;
    &:hover {
        border-radius: 50%;
    }
 `
 const Name = styled.div``
 const Role = styled.div``

 export {ProfileCard}
 export type {ProfileCardProps}