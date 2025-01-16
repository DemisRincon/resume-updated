import React from "react";
import { MainSectionInterface } from "../_lib/interfaceses";
import styled from "styled-components";
import { colors } from "../_lib/global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
  margin: 15px 30px;
  max-width: 100%;
  line-height: 1.3;
`;

const Title = styled.h4`
  margin: 15px 0 0 0;
  &&:after {
    background-color: ${colors.light};
    content: "";
    display: block;
    width: 30%;
    margin: 5px 0 0 0;
    height: 1px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const PositionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  span {
    color: ${colors.lightGreen};
  }
`;

const Enterprise = styled.h5`
  color: ${colors.lightBlue};
  margin: 10px 0;
`;

const PrincipalItem: React.FC<MainSectionInterface> = ({
  title,
  description,
  list,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <p>{description}</p>}
      {list &&
        list.map((item, index) => (
          <DetailsContainer key={index}>
            <PositionWrapper>
              <b>{item.position}</b>
              <span>{item.time}</span>
            </PositionWrapper>
            <Enterprise>{item.enterprise}</Enterprise>
            <p>{item.description}</p>
          </DetailsContainer>
        ))}
    </Container>
  );
};

export default PrincipalItem;
