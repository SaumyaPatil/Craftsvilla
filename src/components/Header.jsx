import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BiStore } from "react-icons/bi";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #000;  // Changed to black for "Select Location"

    svg {
      margin-right: 5px;
      color: #000;  // Location icon color set to black
    }

    /* No hover effect */
  }

  svg {
    font-size: 1.5em;
    color: #c2185b;  // Changed to pink color for other icons

    /* No hover effect */
  }
`;

const Logo = styled.h1`
  font-size: 2em;
  color: #c2185b;
  font-weight: bold;
  margin: 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 15px;
  max-width: 500px;

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 1em;
    padding: 5px;
  }

  svg {
    color: #aaa;
    margin-right: 10px;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  &.open {
    transform: translateX(0);
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 1.2em;
    margin: 10px 0;
    color: #333;

    &:hover {
      color: #c2185b;
    }
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.8em;
    color: #555;
    cursor: pointer;

    &:hover {
      color: #c2185b;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => setIsMobile(window.innerWidth <= 768); 

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      <TopBar>
        <LeftSection>
          {isMobile && <FiMenu onClick={()=>setMenuOpen((prev) => !prev)} style={{ fontSize: "2em", cursor: "pointer", display: 'block' }} />}
          <Logo>Craftsvilla</Logo>
          <SearchBar>
            <FiSearch />
            <input type="text" placeholder="Search your item here" />
          </SearchBar>
        </LeftSection>

        <RightSection>
          <div>
            <IoLocationOutline />
            <span>Select Location</span>
          </div>
          {!isMobile && <><BiStore />
          <FiHeart />
          <FiUser /></>}
          <FiShoppingCart />
        </RightSection>
      </TopBar>

      <SideMenu className={menuOpen ? "open" : ""}>
        <div className="close-btn" onClick={()=>setMenuOpen((prev) => !prev)}>
          <FiX />
        </div>
        {[{ name: "Fashion", id: "fashion" },
          { name: "Beauty & Personal Care", id: "beauty" },
          { name: "Home Decor", id: "home-decor" },
          { name: "Electronics", id: "electronics" },
          { name: "Amazing India", id: "amazing-india" }
        ].map(category => 
          <a key={category.id} href={`#${category.id}`}>{category.name}</a>
        )}
      </SideMenu>
    </HeaderContainer>
  );
};

export default Header;
