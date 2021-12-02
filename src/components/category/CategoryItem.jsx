import { Button, Image, Info, ItemContainer, Title } from "./CategoryStyle"


const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>

    </ItemContainer>
  )
}

export default CategoryItem
