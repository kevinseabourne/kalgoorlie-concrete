import styled from "styled-components";
import ReusableImage from "./image";

const Products = ({ data }) => {
  return (
    <Container>
      {data.map((product) => (
        <Product>
          <ReusableImage src={product.image} alt={product.title} />
          <Title>{product.title}</Title>
        </Product>
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 360px));
  justify-content: center;
  align-items: flex-start;
  grid-auto-flow: row;
  grid-column-end: auto;
  grid-gap: calc(100vw * 0.04) 3%;
`;

const Product = styled.div`
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 20px;
`;
