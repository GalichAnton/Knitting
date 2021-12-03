import React from 'react'
import { Button } from '../slider/SliderStyle'
import { Image,  ProductContainer } from './ProductsStyle'




const Product = ({ item, onOpen, openImage }) => {
  return (
    <ProductContainer onClick={()=>{
      onOpen()
      openImage(item.image, item.descr)
      }}>
      <Image src={item.image} />
      <Button>Подробнее</Button>
    </ProductContainer>
  )
}

export default Product
