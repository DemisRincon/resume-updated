import React from "react";
import styled from "styled-components";
import { SideItemInterface } from "../_lib/interfaceses";
import { breakpoints, colors } from "../_lib/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
  margin: 15px 30px;
  max-width: 100%;
  justify-self: start;
  @media (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`;

export const Title = styled.h4`
  margin: 15px 0;
  &&:after {
    background-color: ${colors.light};
    content: "";
    display: block;
    width: 30%;
    margin: 5px 0 0 0;
    height: 1px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;
import Link from "next/link";

interface WithLinkProps {
  href?: string;
  key: string;
  children: React.ReactNode;
}

const withLink = (Component: React.FC<WithLinkProps>) => {
  const WrappedComponent: React.FC<WithLinkProps> = ({ href, ...props }) => {
    if (href) {
      return (
        <Link href={href} passHref>
          <Component {...props} />
        </Link>
      );
    }
    return <Component {...props} />;
  };

  return WrappedComponent;
};

const ItemContainerWithLink = withLink(ItemContainer);
const SideItem: React.FC<SideItemInterface> = ({ list, name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {list.map((item, index) => (
        <ItemContainerWithLink
          href={typeof item.href === "string" ? item.href : undefined}
          key={index.toString()}
        >
          {item.icon && (
            <IconContainer>
              <item.icon />
            </IconContainer>
          )}
          <span>{item.title}</span>
        </ItemContainerWithLink>
      ))}
    </Container>
  );
};

export default SideItem;
