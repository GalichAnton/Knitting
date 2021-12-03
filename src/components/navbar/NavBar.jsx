import { Instagram, Mail, WhatsApp } from "@material-ui/icons"
import { Center, Container, Icon, Left, Logo, Right, Wrapper, MenuItem, Active } from "./NavBarStyle"
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import './active.css'



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
          <MenuItem>
            <Link
              activeClass='active'
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Главная
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass='active'
              to="category"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Категории
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass='active'
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Отзывы
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass='active'
              to="contactForm"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Контакты
            </Link>
          </MenuItem>
        </Center>
        <Right>
          <Icon href='tel:+79214813681' target='_blank'><WhatsApp fontSize='large' /></Icon>
          <Icon href='https://www.instagram.com/galich.knit/' target='_blank'><Instagram fontSize='large' /></Icon>
          <Icon href='mailto:inthesky133@gmail.com' target='_blank'><Mail fontSize='large' /></Icon>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
