import { Button, Image, Info, ItemContainer, Title } from "./CategoryStyle"
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Link to={`/category/${item.id}`}>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Подробнее</Button>
      </Info>
      </Link>
    </ItemContainer>
  )
}

export default CategoryItem
