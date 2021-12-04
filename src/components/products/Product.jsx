import React from 'react'
import { Button } from '../slider/SliderStyle'
import { Image, ProductContainer, ImgContainer } from './ProductsStyle'




const Product = ({ item, onOpen, openImage }) => {
  return (
    <ProductContainer onClick={() => {
      onOpen()
      openImage(item.image, item.descr)
    }}>
      <ImgContainer>
        <Image src={item.image} />
      </ImgContainer>

      <Button>Подробнее</Button>
    </ProductContainer>
  )
}

export default Product
