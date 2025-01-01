import React from 'react';
import styled from 'styled-components';

import Slider2 from './Slider2';
import { rocketDeals } from '../utils/constants';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #7d7d7d;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto; 
`;

// Main Component
const RocketDeals = () => {
  return (
    <Container>
      <Title>Craftsvilla Rocket Deals</Title>
      <Subtitle>Handpicked for you</Subtitle>

      <Slider2
        cards={rocketDeals.map((item, index) => (
          <Card key={index}>
            <ImageWrapper>
              <img src={item.src} alt={item.alt} height="100%" />
            </ImageWrapper>
          </Card>
        ))}
      />

      <Subtitle style={{ marginTop: '40px', fontWeight: 'bold' }}>
      <ImageWrapper>
      <StyledImage
        alt="Featured Product"
        src="https://cdn1.plotch.io/assets/images/1702617596_MS5wbmc=.png"
      />
    </ImageWrapper>
      </Subtitle>
    </Container>
  );
};

export default RocketDeals;
