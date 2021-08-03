import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./components/card";
import { Navbar } from "./components/navbar";
import { productsData } from "./productsData";

const Wrapper = styled.div``;
const Content = styled.div`
  padding: 0 50px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  max-width: 1300px;
`;
const Header = styled.h2`
  font-size: 18px;
  margin: 10px 4px;
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`;
function App() {
  const [items, setItems] = useState(null)
  useEffect(() => {
    if (productsData) {
      setItems(productsData);
    }
  }, [productsData]);
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Card>
          <Header>Groceries</Header>
          <ProductList>
           </ProductList>
        </Card>
      </Content>
    </Wrapper>
  );
}

export default App;
