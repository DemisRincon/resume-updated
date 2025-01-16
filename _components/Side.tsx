import React from "react";
import { SideData } from "../_lib/data";
import styled from "styled-components";
import { breakpoints, colors } from "../_lib/global";
import Image from "next/image";
import SideItem from "./SideItem";

interface SideProps {
  sideData: SideData;
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.dark};
  color: ${colors.light};
  @media (min-width: ${breakpoints.desktop}) {
    width: 30%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  width: 50%;
  height: auto;
  object-fit: cover;
`;

const Name = styled.h1`
  text-align: center;
  color: ${colors.light};
  margin: 20px;
  max-width: 100%;
`;

const JobTitle = styled.h4`
  text-align: center;
  margin: 10px 0;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

const Side: React.FC<SideProps> = ({
  sideData: { profile, contact, languages, softSkills, frameworksTools },
}) => {
  return (
    <Container>
      <ImageContainer>
        <ProfileImage
          src={profile.photo}
          alt="Profile image"
          width={200}
          height={200}
          priority
        />
      </ImageContainer>
      <Name>{profile.name}</Name>
      <JobTitle>{profile.position}</JobTitle>
      <Grid>
        <SideItem {...contact} />
        <SideItem {...languages} />
        <SideItem {...softSkills} />
        <SideItem {...frameworksTools} />
      </Grid>
    </Container>
  );
};

export default Side;
