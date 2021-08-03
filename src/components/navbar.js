import React, { useState } from "react";
import styled from "styled-components";
import { IconCart, IconDelete, IconSearch } from "../utils/icons";


const Wrapper = styled.div`
  width: 100vw;
  background: var(--bg-color);
`;
const NavbarContainer = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`;
const Logo = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;

  > span {
    color: var(--accent-color);
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  > input {
    border: 1px solid #eeeeee;
    padding: 13px;
    border-radius: 0;
    color: #000;
    outline: 0;
    min-width: 450px;
  }
`;
const SearchButton = styled.button`
  min-width: 80px;
  font-weight: 500;
  padding: 7px;
  border: none;
  border-radius: 5px;
  border: 2px solid #ffc60b;
  background: #ffc60b;
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
  > .item-count {
    background: var(--accent-color);
    border-radius: 50%;
    font-size: 14px;
    position: absolute;
    top: -6px;
    right: -21px;
    width: 20px;
    height: 20px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover > :last-child {
    display: block;
  }
`;

export function Navbar(props) {
  const [query, setQuery] = useState(null);
  return (
    <>
      <Wrapper>
        <NavbarContainer>
          <Logo>
            <span>E</span>shop
          </Logo>
          <SearchContainer>
            <input
              value={query || ""}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
            />
            <SearchButton>
              <IconSearch size={"22"} color={"#103755"} />
            </SearchButton>
          </SearchContainer>
          <CartContainer>
            <IconCart size={"22"} color={"#707b8e"} />
            <span>Card</span>
            <div className="item-count">5</div>
          
          </CartContainer>
        </NavbarContainer>
      </Wrapper>
    </>
  );
}

