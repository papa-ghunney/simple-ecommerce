import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Button } from "./Button";
import { infoData } from "../data/infoData";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  width: 80%;
  height: 100%;
  padding: 0rem 0rem;
  @media screen and (max-width: 760px) {
    margin-bottom: -1.5rem;
    width: 100%;
  }
`;
const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 400px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 450px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4;
  padding: 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h2 {
    margin-bottom: 1.1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 0.933rem;
  }
  @media screen and (max-width: 760px) {
    margin-bottom: -2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 760px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    padding: 2rem 2rem;
  }

  img {
    width: 100%;
    height: 90%;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = ({ history }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section>
      <Container>
        <ColumnLeft data-aos="fade-left" reverse={infoData.reverse}>
          <h2>{infoData.heading}</h2>
          <p>{infoData.paragraphOne}</p>
          <p>{infoData.paragraphTwo}</p>
          <Button primary onClick={() => history("./products/1")}>
            {infoData.buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight data-aos="zoom-out" reverse={infoData.reverse}>
          <img src={infoData.image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default withRouter(InfoSection);
