import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  background: var(--bg-color);
  padding: 11px 16px;
  width:100%;
`;

export function Card({ children,style }) {
  return (
    <>
      <CardContainer style={{...style}}>{children}</CardContainer>
    </>
  );
}
