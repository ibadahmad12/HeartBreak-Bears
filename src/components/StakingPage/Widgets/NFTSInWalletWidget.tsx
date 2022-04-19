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
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #824b40;
  font-size: 2.2vh;
  line-height: 3vh;
  text-align: center;
  padding: 9px 15px;
  color: white;
  cursor: pointer;
  margin: 5px;
  margin-top: 0vh;
  margin-bottom: 4vh;
  border: 1px solid white;
  padding: 0.5 0.5rem;
  border-radius: 16px 0px;
  border-width: 2px;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 2vh;
    line-height: 2vh;
  }
`;
export { NFTSInWalletWidget };
