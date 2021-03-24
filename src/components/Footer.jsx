import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 50%;
  margin: 4rem 20rem;
  text-align: center;

  @media screen and (max-width: 760px) {
    text-align: center;
    margin: 4rem 8rem;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>{year} © BEANS </p>
    </FooterContainer>
  );
};

export default Footer;
