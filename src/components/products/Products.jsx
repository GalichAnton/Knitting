import { popularProducts } from '../../data/data'
import Product from './Product'
import { Container, Wrapper } from './ProductsStyle'

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Products
