import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {  Icon, Image, Info, ProductContainer } from './ProductsStyle'




const Product = ({ item }) => {
  return (
    <ProductContainer>
            <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </ProductContainer>
  )
}

export default Product
