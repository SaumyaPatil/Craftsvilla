import React from "react";
import styled from "styled-components";

import Slider2 from "./Slider2";
import { categories } from "../utils/constants";

const CategoriesContainer = styled.div`
  padding: 20px 0;
  background-color: #ffffff;
`;

const CategoryItem = styled.div`
  text-align: center;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const CategoryImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const CategoryName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      <Slider2 cards={categories.map((category) => (
        <CategoryItem
          key={category.id}
          onClick={() => window.location.href = category.link }
        >
          <CategoryImage src={category.image} alt={category.name} />
          <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
      ))} />
    </CategoriesContainer>
  );
};

export default Categories;
