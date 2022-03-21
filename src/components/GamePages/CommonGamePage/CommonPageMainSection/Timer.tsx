import React from "react";
import styled from "styled-components";

interface TimerProps {
    hours: string;
    minutes: string;
    seconds: string;
}

function Timer(props: TimerProps) {
    return <Container>
        <Time>
            {`${props.hours}:${props.minutes}:${props.seconds}`}
        </Time>
    </Container>
}


const Container = styled.div`
    self-align: center;
    display: flex;
    margin: 0 auto;
    z-index: 10;
    font-size: 10vh;
    line-height: 10vh;
    text-align: center;
    text-shadow: 2px 2px 3px rgb(0 0 0 / 30%);
    @media (max-width: 768px) {
        font-size: 5vh;
        line-height: 5vh;
    }
}
`

const Time = styled.div`
    self-align: center;`


export { Timer }
