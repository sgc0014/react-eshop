import React, { useState } from "react";
import styled from "styled-components";
import { IconCart, IconDelete, IconSearch } from "../utils/icons";

import { useCart } from "../context/cartContext";
import { CheckoutModal } from "./modal";

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
  const { data: cartItems } = useCart();
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
            <div className="item-count">{cartItems.length}</div>
            <OpenCart />
          </CartContainer>
        </NavbarContainer>
      </Wrapper>
    </>
  );
}

const StyledOpenCart = styled.div`
  position: absolute;
  top: 24px;
  right: -42px;
  z-index: 9999;
  width: 300px;
  background: var(--bg-color);
  max-height: 418px;
  box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 26%);
  padding: 14px 8px;
  display: none;
  :hover {
    display: block;
  }
`;
const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  > p {
    font-size: 13px;
    text-align: center;
  }
  margin-bottom: 10px;
`;
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  > div {
    width: 78px;
    display: flex;
    align-items: center;
    gap: 4px;
    > .product_name {
      font-size: 11px;
    }
    > img {
      width: 30px;
      object-fit: contain;
    }
  }
`;
const QuantityControl = styled.div`
  > button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: none;
    border: 1px solid;
  }
  > input {
    width: 20px;
    background: transparent;
    border: none;
    text-align: center;
  }
`;
const CheckoutBtn = styled.button`
  background: var(--accent-color);
  color: #fdf6f6;
  border: none;
  padding: 5px 7px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
const OpenCart = () => {
  const { data: cartItems, setData: setCartItems } = useCart();
  const [modal, setModal] = useState(null);

  const handleIncrement = (e, currentValue, id) => {
    let quantity;

    if (currentValue > 5 || currentValue === 5) {
      quantity = 5;
    } else {
      quantity = currentValue + 1;
    }

    let itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIndex].quantity = quantity;
    setCartItems([...cartItems]);
  };

  const handleDecrement = (e, currentValue, id) => {
    let quantity;
    if (currentValue < 1 || currentValue === 1) {
      quantity = 1;
    } else {
      quantity = currentValue - 1;
    }

    let itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIndex].quantity = quantity;
    setCartItems([...cartItems]);
  };
  const handleDelete = (id) => {
    setCartItems([...cartItems.filter((item) => item.id !== id)]);
  };
  return (
    <StyledOpenCart>
      {modal && (
        <CheckoutModal
          mFor={modal}
          onReject={() => {
            setCartItems([]);
            setModal(null);
          }}
        />
      )}
      <CartItemList>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <div>
                <img src={item.img} alt="" />
                <p className="product_name">{item.name}</p>
              </div>

              <QuantityControl>
                <button
                  onClick={(e) => handleIncrement(e, item.quantity, item.id)}
                >
                  +
                </button>
                <input readOnly type="number" value={item.quantity} />
                <button
                  onClick={(e) => handleDecrement(e, item.quantity, item.id)}
                >
                  -
                </button>
              </QuantityControl>

              <IconDelete
                onClick={() => handleDelete(item.id)}
                size={"15"}
                color={"red"}
              />
            </CartItem>
          ))
        ) : (
          <p>There are no items</p>
        )}
      </CartItemList>
      <CheckoutBtn
        disabled={cartItems && cartItems.length === 0 ? true : false}
        onClick={() => setModal(cartItems)}
      >
        Checkout
      </CheckoutBtn>
    </StyledOpenCart>
  );
};
