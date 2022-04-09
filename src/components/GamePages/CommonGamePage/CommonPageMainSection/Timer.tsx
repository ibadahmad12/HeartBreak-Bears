import React from "react";
import styled from "styled-components";

interface TimerProps {
    time: string
}

function Timer(props: TimerProps) {

    function WhatToShow() {
        if (props.time.includes(":")) {
            return (
                <Time>
                    {`${props.time}`}
                </Time>
            )
        } else if (props.time.includes("Loading...")) {
            return (<i className="fa fa-spinner fa-spin"></i>)
        } else {
            return (
                <Text>
                    {`${props.time}`}
                </Text>
            )
        }
    }
    return <Container>
        <WhatToShow />
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

const Text = styled.div`
    self-align: center;
    font-size: 4vh;
    `

export { Timer }
