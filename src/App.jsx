import React from 'react';
import styled from 'styled-components';

import Categories from './components/Categories';
import EndOfSeasonSale from './components/EndOfSeasonSale';
import Footer from './components/Footer';
import Header from './components/Header';
import PopularPicks from './components/PopularPicks';
import CardSlider from './components/RocketDeals';
import Slider from './components/Slider';
import TrendingCol from './components/TrendingCol';

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Container>
      <Header/>
      <Categories/>
      <Slider/>
      <CardSlider/>
      <TrendingCol/>
      <PopularPicks/>
      <EndOfSeasonSale/>
      <Footer/>
    </Container>
  );
};

export default App;
