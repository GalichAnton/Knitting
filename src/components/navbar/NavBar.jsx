import { Instagram, Mail, WhatsApp } from "@material-ui/icons"
import { Center, Container, Icon, Left, Logo, Right, Wrapper} from "./NavBarStyle"
import { useState } from "react";
import './active.css'
import Burger from "./Burger";



const NavBar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <Container navbar={navbar}>
      <Wrapper>
        <Left>
          <Logo><img src='/images/logo.png' />Вязание</Logo>
        </Left>
        <Center>
          <Icon href='tel:+79214813681' target='_blank'><WhatsApp fontSize='large' /></Icon>
          <Icon href='https://www.instagram.com/galich.knit/' target='_blank'><Instagram fontSize='large' /></Icon>
          <Icon href='mailto:inthesky133@gmail.com' target='_blank'><Mail fontSize='large' /></Icon>
        </Center>
        <Right>
          <Burger />
        </Right>

      </Wrapper>
    </Container>
  )
}

export default NavBar
