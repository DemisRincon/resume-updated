import React from "react";
import styled from "styled-components";
import { TitleWithIcon } from "./styled";
import { IconType } from "react-icons";

interface BackgroundProps {
  data: {
    name: string;

    icon: IconType;

    list: {
      position: string;

      enterprise: string;

      time: string;

      description?: string;

      tasks?: string[];
    }[];
  };
}

const Background: React.FC<BackgroundProps> = ({
  data: { name, icon, list },
}) => {
  return (
    <Container>
      <TitleWithIcon name={name} icon={icon} />
      {list.map((item, index) => (
        <ItemContainer key={index}>
          <TopContainer>
            <InnerTopContainer>
              <H5>{item.position}</H5>
              <H6>{item.enterprise}</H6>
            </InnerTopContainer>
            <H6>{item.time}</H6>
          </TopContainer>
          {item.description && <Pharagraph>{item.description}</Pharagraph>}
        </ItemContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H5 = styled.h5`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  margin: 0.5rem;
  margin-left: 0;
  text-align: left;
  max-width: 100%;
`;

const H6 = styled.h6`
  display: inline-block;
  margin: 0.5rem;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.lightGreen};
  text-align: left;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    margin-left: 0.5rem;
  }
`;

const ItemContainer = styled.div`
  width: 95%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    flex-direction: row;
  }
`;

const InnerTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    flex-direction: row;
  }
`;

const Pharagraph = styled.p`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
`;
export default Background;
