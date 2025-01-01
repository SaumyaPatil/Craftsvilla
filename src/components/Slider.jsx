import React, { useState } from "react";
import styled from "styled-components";

import { slidesData } from "../utils/constants";

// Styled Components
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SlidesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.activeSlide * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "black" : "gray")};
  cursor: pointer;
`;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <SliderContainer>
        <SlidesWrapper activeSlide={activeSlide}>
          {slidesData.map((slide) => (
            <Slide key={slide.id} bgImage={slide.bgImage}></Slide>
          ))}
        </SlidesWrapper>
      </SliderContainer>
      <Navigation>
        {slidesData.map((_, index) => (
          <Dot
            key={index}
            active={index === activeSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Navigation>
    </>
  );
};

export default Slider;
