import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../../CommonComponents/BorderLineSeparater";
import { FAQQuestionAnswerCard, FAQQuestionAnswerCardProps } from "./FAQQuestionAnswerCard";

function FAQ() {

    const faqs: FAQQuestionAnswerCardProps[]= [];
    faqs.push({
        question:'What is Heartbreak Bear?', 
        answer:'Heartbreak Bear SEASON 1 is a collection of 1,888 randomly generated NFT bears that has been sold out! Heartbreak Bear SEASON 2! Is a collection of randomly generated NFT bears living on the Ethereum blockchain. 7,089 3D Heartbreak Bears will be modelled and generated. Each Heartbreak Bear is unique and also includes 10 1/1 custom designs.'
    });
    faqs.push({
        question:'What is the story of Heartbreak Bear?', 
        answer:'Every bear started out with their hearts filled with love. They were brought into a world that seemed to be perfect, filled with love and compassion. Never did they imagined that their day would come, slowly one by one, they were thrown away, abandoned, and unloved. No one heard their cries, their agony.Consumed by darkness and hatred, they came alive to be the voice for the broken and abandoned. Springing into life filled with vengeance, they formed an army and marched forth to achieve one goal, World Domination. They stand for people who feel unaccepted by society and aim to demolish every form of judgement, insult and critcisim in the world and the Metaverse, to wipe out negativity and restore a positive society for people of all kinds to co-exist.'
    });
    faqs.push({
        question:'When is the official sale for Season 2?', 
        answer:'TBA'
    });
    faqs.push({
        question:'How can I mint a Heartbreak Bear Season 2?', 
        answer:'You will need a personal Ethereum wallet and some ETH. Connect your account via Metamask or WalletConnect and pay for the mint fee and gas fee.'
    });
    faqs.push({
        question:'What will the mint price be for Season 2?', 
        answer:'TBA.'
    });
    faqs.push({
        question:'Is there a presale? When will it start?', 
        answer:'There will be a whitelist presale. More information will be available in Discord.'
    });
    faqs.push({
        question:'Who are the people behind Heartbreak Bear?', 
        answer:'Scroll down to see more information about the team!'
    });
    faqs.push({
        question:'What else can we look forward to?', 
        answer:'We are already our own ERC-20 token, Heartbreak coin. Token owners can use these coins in our games and more! \n Our Scavenger Hunt game will be launched for HBB owners to win various different prizes! Don\'t forget to stay updated as HBB is going to launch our very own HBB merchandise!<br/> In addition, Season 2 of the Heartbreak project is also in development. Coming to you real soon!'
    });

    const renderFAQCards =  ()=>  {
        return faqs.map((faq) => {
        return <FAQQuestionAnswerCard question={faq.question} answer={faq.answer}/>
    })
}
    return (<section id='faq'>
    <Container>
         <BorderLineSeperator borderSize="0.25px" borderWidth="80%"/>
        <Title>FAQ</Title>
        {renderFAQCards()}
    </Container>
    </section>)
}

const Container = styled.div`
    color: white;
    width: 80%;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 7vh;
    line-height: 4vh;
    text-align: center;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    @media (max-width: 768px) {
        font-size: 7vw;
        line-height: 7vw;
    }
`
export { FAQ };
