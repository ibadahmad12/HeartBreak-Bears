import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { WalletContext } from "../../contexts/WalletContext";
import { ScavHuntNavBar } from "../CommonComponents/HuntPageNavBar/HuntPageNavBar";
import { StakeStatistics } from "./StakeStatistics/StakeStatistics";
import { NFTSInWalletWidget } from "./Widgets/NFTSInWalletWidget";
import { NFTSStakedWidget } from "./Widgets/NFTSStakedWidget";

function StakingPage() {
  const { isWalletConnected, connectToWallet, address } =
    useContext(WalletContext);

  const renderAddress = (address: string) => {
    return (
      address.substring(0, 5) +
      "..." +
      address.substring(address.length - 4, address.length)
    );
  };

  return (
    <Container>
      <Overlay>
        <ScavHuntNavBar />
        <Heading>
          <HeaderText>Soulz Opnesea DASHBOARD</HeaderText>
        </Heading>
        <StakeStatistics />
        {!isWalletConnected ? (
          <ConnectMetaMaskLink onClick={() => connectToWallet()}>
            CONNECT WALLET
          </ConnectMetaMaskLink>
        ) : (
          <ConnectMetaMaskLink>{renderAddress(address)}</ConnectMetaMaskLink>
        )}
        <NFTSInWalletWidget />
        <NFTSStakedWidget />
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  background: url(${`https://i.ibb.co/V3z38Nh/image.png`}) no-repeat fixed;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-size: 100% 100%;
  font-family: "Osake";
  position: absolute;
  inset: 0;
  height: 130vh;
  background-fit: cover;
  background-positin: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.8;
`;

const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 80%;

  align-items: center;
  justify-items: center;
  align-self: center;
  text-align: center;
  width: 100%;
  margin: 0 auto 30px;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red,
    0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const HeaderText = styled.div`
  font-size: 7vh;
  line-height: 5vh;
  @media (max-width: 768px) {
    font-size: 2vh;
    line-height: 2vh;
  }
`;

const ConnectMetaMaskLink = styled.button`
  margin-top: 10px;
  border-radius: 20px;
  background-color: transparent;
  display: inline-block;
  padding: 9px 15px;
  color: white;
  border: 0;
  line-height: inherit;
  font-family: "Montserrat";
  cursor: pointer;
  font: inherit;
  z-index: 10;
  font-size: 2vh;
  font-weight: 300;
  font-family: "Montserrat";
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
  padding: 1.2rem 2.5rem;
  border-radius: 16px 0px;
  border-width: 2px;
  transition: 0.3s all;
  cursor: pointer;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red,
    0 0 82px red, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px red;
  box-shadow: 0px 0px 6px 6px red;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export { StakingPage };
