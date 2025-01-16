import React from "react";
import { MainData } from "../_lib/data";
import styled from "styled-components";
import { breakpoints, colors } from "../_lib/global";
import PrincipalItem from "./PrincipalItem";

interface PrincipalProps {
  mainData: MainData;
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  color: ${colors.dark};
  @media (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`;

const Principal: React.FC<PrincipalProps> = ({
  mainData: { about, education, experience },
}) => {
  return (
    <Container>
      <PrincipalItem {...about} />
      <PrincipalItem {...education} />
      <PrincipalItem {...experience} />
    </Container>
  );
};

export default Principal;
