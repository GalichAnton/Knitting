import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ModalWindow from "../components/modal/Modal";
import Product from "../components/products/Product";
import { categories } from '../data/data'

const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1160px;
  padding-top: 100px;
  height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
`;

const Image = styled.img`
  max-width: 50%;
  max-height: 75vh;
  object-fit: cover;
  padding: 0;
  margin: 0;
  flex:1;
`;

const Descr = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #222;
  flex:1;
  padding: 20px;
  width:30%;
`;


const CategoryPage = () => {
  const { categoryType } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const handleClick = () => {
    setOpenModal(!openModal)
  }
  const [imgPopup, setImgPopup] = useState(null)

  useEffect(() => {
    openModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [openModal]);

  const openImage = (src, descr) => {
    setImgPopup(
      <>
        <Image src={src} />
        <Descr>{descr}</Descr>
      </>
    )
  }
  return (
    <Container>
      <Link to='/'>Вернуться на главную</Link>
      <Wrapper>
        {categories.filter((item) => item.id === categoryType).map((item) => (
          item.items.map((product) => (
            <Product item={product} key={product.descr} onOpen={handleClick} openImage={openImage} />
          ))
        ))
        }
      </Wrapper>
      <ModalWindow onClick={handleClick} openModal={openModal}>
        {imgPopup}
      </ModalWindow>
    </Container>
  )
}

export default CategoryPage
