import { IconType } from "react-icons";
import styled from "styled-components";

export const Title = styled.h5<{ color?: string }>`
  color: ${({ theme, color = "white" }) => theme.colors[color]};
  margin: 1rem 1rem 0 1rem;
  &&::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme, color = "white" }) => theme.colors[color]};
    margin: 0.5rem 0 0 0;
  }
`;

interface TitleWithIconProps {
  name: string;
  icon: IconType;
}

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 1rem 0;
  width: 95%;
`;

export const TitleWithIcon = ({ name, icon: Icon }: TitleWithIconProps) => (
  <TopContainer>
    <Icon size={30} color="#333333" />
    <Title color="black">{name}</Title>;
  </TopContainer>
);
