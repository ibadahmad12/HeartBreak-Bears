import React from "react";
import styled from "styled-components";

interface BorderLineSeparaterProps {
    borderWidth: string;
    borderSize: string;
}
function BorderLineSeperator(props: BorderLineSeparaterProps) {
    return <Container borderSize={props.borderSize} borderWidth={props.borderWidth}/>
}
const Container = styled.div<{borderWidth:string, borderSize: string}>`
    width: ${p=> p.borderWidth};
    border-top: ${p => p.borderSize} solid white;
    margin: 0 auto;
    margin-top: 6vh;
    margin-bottom: 6vh;
    @media (max-width: 768px) {
        margin-top: 7vw;
        margin-bottom: 7vw;
    }
`

export { BorderLineSeperator }