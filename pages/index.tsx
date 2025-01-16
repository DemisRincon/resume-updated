import React, { useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import { mainData, sideData } from "../_lib/data";
import Principal from "../_components/Principal";
import Side from "../_components/Side";
import { colors, breakpoints } from "../_lib/global";
import { useReactToPrint } from "react-to-print";

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
  @media print {
    flex-direction: row;
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  background-color: ${colors.dark};
  color: ${colors.light};
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
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
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <>
      <MetaTags />
      <MainContainer ref={contentRef}>
        <Side sideData={sideData} />
        <Principal mainData={mainData} />
      </MainContainer>
      <Button onClick={() => reactToPrintFn()}>Print</Button>
    </>
  );
};

export default Resume;
