import React from 'react';  
import styled from 'styled-components';  

import Slider2 from './Slider2';
import { products } from '../utils/constants';

const Container = styled.div`  
  margin: 20px;  
`;  

const Title = styled.h1`  
  font-size: 2rem;  
  margin-bottom: 20px;  
`;  

const ProductCard = styled.div`  
  background: white;  
  border-radius: 8px;  
  overflow: hidden;  
`;  

const ProductImage = styled.img`  
  width: 100%;  
  height: auto;  
`;  

const EndOfSeasonSale = () => {  
  return (  
    <Container>  
      <Title>End of Season Sale</Title>  
      <Slider2 
        cards={products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.imgSrc} alt={product.title} />
          </ProductCard>
        ))}
      />
    </Container>  
  );  
}  

export default EndOfSeasonSale;
