import React from "react";
import { TitleWithIcon } from "./styled";
import styled from "styled-components";
import { IconType } from "react-icons";

interface AboutProps {
  data: {
    name: string;

    icon: IconType;

    description: string;
  };
}

const About: React.FC<AboutProps> = ({ data: { name, icon, description } }) => {
  return (
    <Conatiner>
      <TitleWithIcon name={name} icon={icon} />
      <Pharagraph>{description}</Pharagraph>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  margin: 2rem 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Pharagraph = styled.p`
  width: 95%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
`;

export default About;
