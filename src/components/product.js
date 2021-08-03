import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  position: relative;
  > img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
  > h4 {
    font-size: 15px;
    font-weight: 500;
  }
  > p {
    font-size: 14px;
    font-weight: 500;
    color: #103755;
  }
  :hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 37%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  }
`;
const QuickAddToCart = styled.div`
  display: flex;
  align-items: center;
  > span {
    background: #ececec;
    font-size: 13px;
    padding: 1px 8px;
  }
  > input {
    max-width: 30px;
    padding: 2px 10px;
    margin-right: 4px;
    text-align: center;
    border: 1px solid #ababab;
    outline: 0;
  }
  > button {
    background: var(--accent-color);
    border: none;
    padding: 3px 19px;
    color: #103755;
    cursor: pointer;
  }
  > button:disabled {
    background: #ceb66a;
  }
`;
const StockMsg = styled.div`
  background: red;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  padding: 1px;
  border-radius: 3px;
`;
export function Product({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [avaibility, setAvaibility] = useState(true);
  const [alreadyAddedInCart, setAlreadyAddedInCart] = useState(false);


  return (
    <>
      <ProductContainer>
        <img src={item.img} alt="" />
        <h4>{item.name}</h4>
        <p>Rs.{item.price}</p>
        <QuickAddToCart>
          <span>Qty</span>
          <input
            value={quantity}
            type="number"
           
          />{" "}
          <button>
            {alreadyAddedInCart ? "Added" : "Add"}
          </button>
        </QuickAddToCart>
        {avaibility === false && <StockMsg>Out of stock</StockMsg>}
      </ProductContainer>
    </>
  );
}
