import React from 'react';
import styled from 'styled-components';

import Slider2 from './Slider2';
import { trendingSectionData } from '../utils/constants';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-top: 10px;
  color: #7d7d7d;
`;

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
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

const TrendingCol = () => {
  return (
    <Container>
      <Title>Top Department</Title>
      <Subtitle>Trending Collection</Subtitle>

      <Slider2
        cards={trendingSectionData.map((item, index) => (
          <Card key={index}>
            <ImageWrapper>
              <StyledImage src={item.src} alt={item.alt} />
            </ImageWrapper>
          </Card>
        ))}
      />

      <Subtitle style={{ marginTop: '40px', fontWeight: 'bold' }}>
        <ImageWrapper>
          <StyledImage
            src="https://cdn1.plotch.io/assets/images/1702618045_Mi5wbmc=.png"
            alt="Featured Product"
          />
        </ImageWrapper>
      </Subtitle>
    </Container>
  );
};

export default TrendingCol;
