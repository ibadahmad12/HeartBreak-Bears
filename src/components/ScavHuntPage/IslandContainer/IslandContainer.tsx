import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

interface Position {
    left: string;
    right: string;
    top: string;
    bottom: string;
}
interface IslandContainerProps {
    title: string;
    linkTo: string;
    position: Position; 
    backgroundImageURL: string;
}

function IslandContainer (props: IslandContainerProps) {
    return <Container 
        top={props.position.top}
        left={props.position.left} 
        right={props.position.right}
        bottom={props.position.bottom}
        background={props.backgroundImageURL}>
        <Title>{props.title}</Title>
        <CustomLink to={props.linkTo}>Enter</CustomLink>
    </Container>
}

const Container = styled.div<{top:string, right: string, bottom: string, left: string, background: string}>`
    position: absolute;
    left: ${p => p.left};
    right: ${p => p.right};
    top: ${p => p.top};
    bottom: ${p => p.bottom};
    background-image: url(${p => p.background});
    width: 50vw;
    height: 35vh;
    background-size: 35vw;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-content: stretch;
    @media (max-width: 768px) {{
        height: 20vh;
        background-size: 40vw;
    }
`
const CustomLink = styled(Link)`
    padding: 9px 15px;
    border: 5px solid white;
    color: white;
    background: #c2ac56;
    font-size: 3vh;
    line-height: 3vh;
    cursor: pointer;
    margin: 0 auto;
    display: inline block;
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    z-index:10;
    &:hover {
        color: #c2ac56;
        background: white;
        border: 5px solid #c2ac56;
    }
    @media (max-width: 768px) {{
        padding: 5px;
        border-radius: 10px;
        font-size: 1.5vh;
        line-height: 1.5vh;
    }
`

const Title = styled.div`
    font-size: 6vh;
    line-height: 6vh;
    text-shadow: 3px 3px 2px rgb(0 0 0 / 30%);
    width: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {{
        font-size: 2vh;
        line-height: 2vh;
    }
`

export { IslandContainer }