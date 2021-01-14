import Banner from "../components/banner";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Main>
      <Banner />
    </Main>
  );
}

const Main = styled.main``;
