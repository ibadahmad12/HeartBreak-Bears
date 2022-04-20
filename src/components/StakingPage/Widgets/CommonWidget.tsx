import React, { Children, ReactChild, ReactChildren, ReactNode } from "react";
import styled from "styled-components";
import { IPFSLink } from "../../../contracts/constants";

interface ChildrenProps {
  children: ReactChild | ReactChildren;
  title: string;
  nfts: string[];
  onClick: Function;
  selectedNFTs: string[];
}

function CommonWidget({
  children,
  title,
  nfts,
  onClick,
  selectedNFTs,
}: ChildrenProps) {
  const highlight = {
    borderWidth: "5px",
    borderStyle: "solid",
    // backgroundColor: "green",
    borderColor: "green",
  };
  const noHighlight = {
    borderWidth: "0px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: "transparent",
  };

  const nftItems = nfts.map((nft) => (
    <Box
      key={nft}
      onClick={() => {
        onClick(nft);
      }}
    >
      <Image
        style={selectedNFTs.includes(nft) ? highlight : noHighlight}
        src={`${IPFSLink}${nft}.png`}
      />
    </Box>
  ));
  return (
    <Container>
      <Title>{title}</Title>
      <BoxContainer>{nftItems}</BoxContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: transparent;
  color: white;
  box-shadow: 2px 2px 3px 3px rgb(0 0 0 / 30%);
  z-index: 10;
  margin: 0 auto;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 4vh;
  margin-bottom: 4vh;
  @media (max-width: 768px) {
    padding-left: 3px;
    padding-right: 3px;
  }
  width: 30%;
  border-radius: 2rem;
  padding: 1rem 0.4em;
  box-shadow: 0px 0px 6px 6px red;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const Title = styled.h1`
  color: #000;
  font-size: 4vh;
  font-weight: 500;
  color: white;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red,
    0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;
  line-height: 4vh;
  @media (max-width: 768px) {
    font-size: 2vh;
    line-height: 1.5vh;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 5vh;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 200px;
  max-width: 200px;
  border-radius: 20px;
`;

const Box = styled.div`
  max-height: 200px;
  max-width: 200px;
  min-height: 120px;
  min-width: 120px;
  margin-right: 1vh;
  margin-left: 1vh;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  margin: 5px;
  @media (max-width: 768px) {
    max-height: 60px;
    max-width: 60px;
    min-height: 60px;
    min-width: 60px;
    border-radius: 10px;
  }
`;

export { CommonWidget };
