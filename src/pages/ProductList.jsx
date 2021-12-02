import styled from "styled-components";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Annonsment from '../components/annons/Annonsment'
import Products from "../components/products/Products";
import Newsletter from "../components/newsleter/Newsletter";

const Container = styled.div`
  
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Filter = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.h2`

  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Annonsment />
      <Title>Coat</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
