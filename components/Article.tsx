import Link from "next/link";
import styled from "styled-components";
import { Title } from "./styled";
import { IconType } from "react-icons";

interface ArticleProps {
  data: {
    name: string;
    list: {
      title: string;
      icon?: IconType;
      href?: string | boolean;
    }[];
  };
}

const Article: React.FC<ArticleProps> = ({ data: { name, list } }) => (
  <Container>
    <Title>{name}</Title>
    <Content>
      {list.map((item, index) => (
        <List key={index}>
          <ListItem>
            {item.icon && (
              <item.icon size={0} style={{ margin: "0 0.5rem 0 0" }} />
            )}

            {item.href ? (
              <Link href={item.href ? item.href.toString() : ""}>
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </ListItem>
        </List>
      ))}
    </Content>
  </Container>
);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  max-width: 100%;
  margin: 0 1rem;
  @media print {
    margin: 0 0.5rem;
  }
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
`;

export default Article;
