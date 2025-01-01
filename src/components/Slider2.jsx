import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: grab;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const CardWrapper = styled.div`
  min-width: 300px;
  margin-right: 16px;
`;

const Slider2 = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - offsetX); 
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newOffset = e.pageX - startX;
    setOffsetX(newOffset);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';

    if (offsetX > 100 && currentIndex < cards.length - 1) 
      setCurrentIndex(currentIndex + 1);
     else if (offsetX < -100 && currentIndex > 0) 
      setCurrentIndex(currentIndex - 1); 
    setOffsetX(0);
  };

  return (
    <SliderWrapper
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
    >
      <SliderContainer
        style={{
          transform: `translateX(-${currentIndex * 320 + offsetX}px)`, 
        }}
      >
        {cards.map((CardComponent, index) => (
          <CardWrapper key={index}>
            {CardComponent}
          </CardWrapper>
        ))}
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider2;
