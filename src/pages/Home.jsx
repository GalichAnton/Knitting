import Slider from '../components/slider/Slider'
import Category from '../components/category/Category'
import ModalWindow from '../components/modal/Modal'
import { useState } from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import NavBar from "../components/navbar/NavBar"


const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <NavBar/>
      <Slider onClick={handleClick} />
      <Category />
      <ModalWindow onClick={handleClick} openModal={openModal}>
        <ContactForm onClick={handleClick} />
      </ModalWindow>
    </div>
  )
}

export default Home
