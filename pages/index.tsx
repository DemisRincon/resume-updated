import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { mainData, sideData } from "./_lib/data";
import Principal from "./_components/Principal";
import Side from "./_components/Side";
import { colors, breakpoints } from "./_lib/global";

const MainContainer = styled.div`
  background-color: ${colors.light};
  min-height: 100vh;
  max-width: 100vw;
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  line-height: 1.2;
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    font-size: 1rem;
    line-height: 1;
  }
`;

const MetaTags = () => (
  <Head>
    <title>Resume Demis Rincon</title>
    <meta name="description" content="Professional resume" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Resume: React.FC = () => {
  return (
    <>
      <MetaTags />
      <MainContainer>
        <Side sideData={sideData} />
        <Principal mainData={mainData} />
      </MainContainer>
    </>
  );
};

export default Resume;
