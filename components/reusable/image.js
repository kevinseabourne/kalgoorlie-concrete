import { useState } from "react";
import Image from "next/image";
import { LoadingSpinner } from "./loadingSpinner";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ReusableImage = ({
  src,
  placeholderSize,
  placeholderColor,
  alt,
  maxWidth,
  keyValue,
  dataTestId,
  onClick,
  borderRadius,
  hover,
  transitionTiming,
  transitionDuration,
  boxShadow,
  centerImage,
  handleOnLoadOutside,
  editDeleteContent,
  priority, // if priority is true, onLoad will not run and a loading element is not needed.
  layout: imageLayout,
  width,
  height,
  y,
  x,
  blur,
  scale,
  opacity,
  duration,
  delay,
  loadingSpinner,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
    if (handleOnLoadOutside) {
      handleOnLoadOutside();
    }
  };

  // I would change the condition to opacity ? opacity : 0
  // but the animation does not work.
  const animation = {
    hidden: {
      opacity: opacity !== undefined ? opacity : 1,
      y: y !== undefined ? y : 0,
      x: x !== undefined ? x : 0,
      scale: scale !== undefined ? scale : 1,
      filter: blur !== undefined ? `blur(${blur}px)` : `blur(0px)`,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: `blur(0px)`,
      transition: {
        type: "spring",
        duration: duration !== undefined ? duration : 0,
        delay: delay !== undefined ? delay : 0,
      },
    },
  };

  return (
    <Container
      borderRadius={borderRadius}
      maxWidth={maxWidth}
      hover={hover}
      layout={imageLayout}
    >
      <Placeholder
        borderRadius={borderRadius}
        onClick={onClick}
        placeholderSize={placeholderSize}
        placeholderColor={placeholderColor}
      />
      <ImageContainer
        variants={animation}
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        data-testid={dataTestId}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        editDeleteContent={editDeleteContent}
      >
        <Image
          src={src}
          alt={alt}
          layout={imageLayout}
          onLoad={onLoad}
          width={width}
          height={height}
        />
      </ImageContainer>

      {loadingSpinner && !isLoaded && <LoadingSpinner size="39px" />}
    </Container>
  );
};

export default ReusableImage;

ReusableImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSize: PropTypes.string.isRequired,
  placeholderColor: PropTypes.string,
  alt: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
  maxWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  hover: PropTypes.bool,
  boxShadow: PropTypes.string,
  handleOnLoadOutside: PropTypes.func,
  priority: PropTypes.bool,
  layout: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  y: PropTypes.number,
  x: PropTypes.number,
  blur: PropTypes.string,
  scale: PropTypes.number,
  opacity: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  loadingSpinner: PropTypes.bool,
};

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  height: ${({ layout }) => (layout === "fill" ? "100%" : "auto")};
  position: relative;
  background: transparent;
`;

const Placeholder = styled(motion.div)`
  width: 100%;
  padding-bottom: ${({ placeholderSize }) =>
    placeholderSize ? placeholderSize : "100%"};
  background: ${({ placeHolderColor }) =>
    placeHolderColor ? placeholderColor : "transparent"};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
  object-position: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  &:hover {
    cursor: ${({ hover }) => (hover ? "pointer" : "default")};
  }
  }
  `;
