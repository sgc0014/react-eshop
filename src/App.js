import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./components/card";
import { Navbar } from "./components/navbar";
import { Product } from "./components/product";
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
const FilterSection = styled.div`
  width: 125px;

  > select {
    background: #2c3e50;
    color: #e8e4e4;
    text-transform: capitalize;
    font-size: 14px;
    padding: 4px 17px;
    border: none;
    outline: none;
  }
`;
function App() {
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState(null);

  //fetch and filter data if needed
  useEffect(() => {
    if (productsData) {
      if (filter !== "All") {
        let filteredData;
        filteredData = productsData.filter(
          (product) => product.category === filter
        );
        setItems(filteredData);
      } else {
        setItems(productsData);
      }
    }
  }, [productsData, filter]);

  return (
    <Wrapper>
      <Navbar />

      <Content>
        <Card style={{ maxWidth: "130px" }}>
          <Header>Filter</Header>
          <FilterSection>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetable</option>
            </select>
          </FilterSection>
        </Card>
        <Card>
          <Header>Groceries</Header>
          <ProductList>
            {items &&
              items.map((item) => <Product key={item.id} item={item} />)}
          </ProductList>
        </Card>
      </Content>
    </Wrapper>
  );
}

export default App;
