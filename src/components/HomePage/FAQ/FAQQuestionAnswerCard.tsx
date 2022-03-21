import React, { useState } from "react";
import styled, { css } from "styled-components";

interface FAQQuestionAnswerCardProps{
    question: string;
    answer: string;
}
function FAQQuestionAnswerCard(props: FAQQuestionAnswerCardProps) {

    const [expanded, setExpanded] = useState(false);

    const handleClick = ()=>{
        setExpanded(!expanded);
    }
    return <Container>
        <QuestionContainer>
            <Question>
                {props.question}
            </Question>
            <CustomImage
                expanded = {expanded} 
                src='https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6177a8dfc18dd52d3fb3dfa6_Arrow%20Button.svg'
                onClick={handleClick}/>
        </QuestionContainer>
        <Answer expanded={expanded}>{props.answer}</Answer>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`

const Question = styled.h3`
    font-size: 24px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 0;
    @media (max-width: 768px) {
        font-size: 2vh;
        line-height: 2vh;
        text-align: left;
    }
`
const Answer = styled.p<{expanded: boolean}>`
    display: ${p => p.expanded?'block':'none'};
    font-size: 2.5vh;
    line-height: 2.5vh;
    cursor: default;
    text-align: left;
    font-family: Hkgrotesk, sans-serif;
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
        text-align: left;
    }
`

const CustomImage = styled.img<{expanded: boolean}>`
    display: inline-block;
    width: 30px;
    @media (max-width: 768px) {
       width: 20px;
    }
    ${ props => props.expanded && css`
        transform: rotate(180deg);
        transition: transform .2s ease-out;
  `};
`
export {FAQQuestionAnswerCard};
export type {FAQQuestionAnswerCardProps}