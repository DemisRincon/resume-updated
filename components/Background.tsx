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
            <TopContainer>
              <H5>{item.position}</H5>
              <H6>{item.enterprise}</H6>
            </TopContainer>
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
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  margin-left: 0;
`;

const H6 = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  color: ${({ theme }) => theme.colors.lightGreen};
`;
const ItemContainer = styled.div`
  width: 95%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pharagraph = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  @media print {
    font-size: 0.9rem;
  }
`;
export default Background;
