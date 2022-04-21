import styled from "styled-components";
import { CommonWidget } from "./CommonWidget";
import React, { useContext, useEffect, useState } from "react";
import { WalletContext } from "../../../contexts/WalletContext";
import { StakingContract } from "../../../contracts/StakingContract/StakingContract";
import { HBBNFTContract } from "../../../contracts/HBBNFTContract/HBBNFTContract";
import { StakingContractAddress } from "../../../contracts/constants";

function NFTSInWalletWidget() {
  const { nftsInWallet, address } = useContext(WalletContext);

  const [selectedNFTs, setSelectedNFTs] = useState<string[]>([]);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  useEffect(() => {
    const checkApproved = async () => {
      const isApproved = await HBBNFTContract.checkIsApproved(
        address,
        StakingContractAddress
      );
      console.log("Is approved: ", isApproved);
      setIsApproved(isApproved);
    };
    if (address) {
      checkApproved();
    }
  }, [address]);

  function updateSelected(id: string) {
    if (selectedNFTs.includes(id)) {
      setSelectedNFTs(selectedNFTs.filter((nft) => nft !== id));
    } else {
      setSelectedNFTs([...selectedNFTs, id]);
    }
  }

  return (
    <CommonWidget
      title="NFTS IN WALLET"
      nfts={nftsInWallet}
      onClick={updateSelected}
      selectedNFTs={selectedNFTs}
    >
      <StakeLinks>
        {!isApproved && (
          <StakeLink
            onClick={() => {
              HBBNFTContract.approve(StakingContractAddress);
            }}
          >
            Approve
          </StakeLink>
        )}
        <StakeLink
          onClick={() => {
            StakingContract.stakeNFTs(address, selectedNFTs);
          }}
        >
          Stake
        </StakeLink>
      </StakeLinks>
    </CommonWidget>
  );
}

const StakeLinks = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: auto;
`;

const StakeLink = styled.a`
  text-decoration: none;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Montserrat";
  font-size: 2.2vh;
  line-height: 3vh;
  text-align: center;
  padding: 9px 15px;
  color: white;
  cursor: pointer;
  margin-top: 0vh;
  margin-bottom: 4vh;
  padding: 0.5 0.5rem;
  border-radius: 16px 0px;
  border-width: 2px;
  transition: 0.3s all;
  cursor: pointer;
  box-shadow: 0px 0px 6px 6px red;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red,
    0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;

  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 2vh;
    line-height: 2vh;
    min-height: 25px;
    padding-top: 0.65rem;
}
  }
`;
export { NFTSInWalletWidget };
