import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ScavHuntPageLogo() {
  return (
    <Container>
      <Link to="/">
        <CustomImage src="https://i.ibb.co/5kXRhfd/favicon-7828ec7445d0608a0da4.png" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 80px;
  color: white;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

const CustomImage = styled.img`
  margin-top: 10px;
  width: 100%;
  color: white;
  background: transpar ent;
`;

export { ScavHuntPageLogo };
