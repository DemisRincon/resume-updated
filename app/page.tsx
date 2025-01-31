"use client";
import About from "@/components/About";
import Article from "@/components/Article";
import Background from "@/components/Background";
import about from "@/lib/data/about";
import contact from "@/lib/data/contact";
import education from "@/lib/data/education";
import experience from "@/lib/data/experience";
import frameworksTools from "@/lib/data/frameworksAndTools";
import languages from "@/lib/data/languages";
import profile from "@/lib/data/profile";
import softSkills from "@/lib/data/softSkills";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <MainContainer>
      <MobileContainer>
        <StyledImage src="/photo.jpg" />
        <h1>{profile.name}</h1>
        <h4>{profile.position}</h4>
      </MobileContainer>
      <InnerContainer ref={contentRef}>
        <LeftContainer>
          <DesktopContainer>
            <StyledImage src="/photo.jpg" />
            <h1>{profile.name}</h1>
            <h4>{profile.position}</h4>
          </DesktopContainer>
          <Article data={contact} />
          <Article data={languages} />
          <Article data={softSkills} />
          <Article data={frameworksTools} />
        </LeftContainer>
        <RightContainer>
          <About data={about} />
          <Background data={education} />
          <Background data={experience} />
        </RightContainer>
      </InnerContainer>
      <Button onClick={() => reactToPrintFn()}>Print</Button>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column-reverse;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    margin: 50px 0;
    flex-direction: row;
  }
  @media print {
    line-height: 1;
    margin: 0;

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.8rem;
    }
    h6 {
      font-size: 0.8rem;
    }
    ul {
      margin: 0.5rem;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    width: 25%;
  }
  @media print {
    font-size: 0.8rem;
    border-right: 1px solid ${({ theme }) => theme.colors.ligthGreen};
    height: 100vh;
  }
`;

const MobileContainer = styled(LeftContainer)`
  display: flex;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    display: none;
  }
`;

const DesktopContainer = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}), print {
    width: 75%;
  }
  @media print {
    width: 70%;
    font-size: 0.8rem;
    line-height: 0.8;
    p {
      margin: 0.5rem 0;
    }
  }
`;

const StyledImage = styled.img`
  margin: 20px 0;
  width: 50%;
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 0 40px 0;
  }
`;

export default Home;
