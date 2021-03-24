import React from "react";
import Layout from "../components/shared/Layout";
import styled from "styled-components";

const ErrorText = styled.p`
  font-weight: "center";
  text-align: center;
  margin-top: 30px;
`;

const Error = () => {
  return (
    <>
      <Layout>
        <ErrorText> Oops! Sorry, Page cannot be found</ErrorText>
      </Layout>
    </>
  );
};

export default Error;
