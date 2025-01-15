import React from "react";
import { MainData } from "../_lib/data";
import styled from "styled-components";
import { breakpoints, colors } from "../_lib/global";

interface PrincipalProps {
  mainData: MainData;
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  color: ${colors.dark};
  padding: 0 50px;
  @media (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`;

const Principal: React.FC<PrincipalProps> = ({ mainData: { profile } }) => {
  return <Container>Main</Container>;
};

export default Principal;
