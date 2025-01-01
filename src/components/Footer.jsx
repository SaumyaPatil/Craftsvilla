import React from 'react';  
import styled from 'styled-components';  

const FooterContainer = styled.footer`  
  background-color: #a52a2a; /* Maroon color */  
  display: flex;  
  justify-content: space-around; /* Space items evenly */  
  padding: 20px 0;  
  color: white;  
`;  

const FooterItem = styled.div`  
  font-size: 13px;  
  cursor: pointer;  
  &:hover {  
    text-decoration: underline;  
  }  
`;  

const Footer = () => {  
  return (  
    <FooterContainer> 
      <FooterItem>TOP CATEGORIES</FooterItem>  
      <FooterItem>POLICIES & INFO</FooterItem>  
    </FooterContainer>  
  );  
};  

export default Footer;