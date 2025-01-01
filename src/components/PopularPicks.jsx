import React from 'react';
import styled from 'styled-components';

import Slider2 from './Slider2';
import { picks } from '../utils/constants';

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const PopularPicks = () => {
  return (
    <Container>
      <Title>Popular Picks</Title>
      <Slider2 
        cards={picks.map((pick, index) => (
          <img src={pick.image} alt={pick.brand} key={index} />
        ))} 
      />
    </Container>
  );
};

export default PopularPicks;
