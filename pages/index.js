import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Title>Kalgoorle Precast Concrete</Title>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
