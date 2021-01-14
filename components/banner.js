import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LoadingSpinner } from "./reusable/loadingSpinner";
import ReusableImage from "./reusable/image";
import styled from "styled-components";

const Banner = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = (e) => {
    if (e.target) {
      setImageLoaded(true);
    }
  };

  return (
    <Container>
      <ReusableImage
        src="https://images.unsplash.com/photo-1551054838-dd942260b6a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        alt="concrete"
        layout="fill"
        placeholderSize="100%"
        placeholderColor="red"
        priority={true}
        opacity={0}
        duration={0.8}
      />
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 80px);
  min-height: 100vh;
  max-height: 100vh;
  object-fit: scale-down;
`;
