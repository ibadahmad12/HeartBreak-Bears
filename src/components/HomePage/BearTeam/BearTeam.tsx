import React from "react";
import styled from "styled-components";
import { BorderLineSeperator } from "../../CommonComponents/BorderLineSeparater";
import { ProfileCard, ProfileCardProps } from "./ProfileCard";

function BearTeam() {

    const renderProfileCards = () => {
        let profileCards: ProfileCardProps[] = []

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        profileCards.push({
            bearImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b2523612ec4f939baf11_NFT-Broken-Barry-512.png',
            profileImage: 'https://uploads-ssl.webflow.com/61669e248724654baf8b8d74/6166b250c4ae72fd803cc152_NFT-Professor-B-512.png',
            name: 'Eugene',
            role: 'Project Lead'
        })

        return profileCards.map((profileCard) => {
            return <ProfileCard 
                        name={profileCard.name}
                        role={profileCard.role}
                        bearImage={profileCard.bearImage}
                        profileImage={profileCard.profileImage}
                    ></ProfileCard>
        })

    }

    return ( <section id='team'>
        <BorderLineSeperator borderSize="1px" borderWidth="80%"/>
        <Title> HEARTBREAK BEAR TEAM </Title>
        <Container> 
            {renderProfileCards()}
        </Container>
    </section> );

}

const Container = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
     }
`

const Title = styled.h1`
    color: white;
    font-size: 8vw;
    line-height: 8vw;
    text-align: center;
    width: 80%;
    margin: 0 auto;
`
export { BearTeam }