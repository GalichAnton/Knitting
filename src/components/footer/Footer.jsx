import { Facebook, Instagram, Mail, Phone, Room } from '@material-ui/icons'
import React from 'react'
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, Right, SocialContent, SocialIcon, Title, Wrapper } from './FooterStyle'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Вязание</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sed, veniam in quasi enim.</Desc>
          <SocialContent>
            <SocialIcon color='3b5999'><Instagram /></SocialIcon>
            <SocialIcon color='e4405f'><Facebook /></SocialIcon>
            <SocialIcon color='55acee'><Mail /></SocialIcon>
          </SocialContent>
        </Left>
        <Center>
          <Title>Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Close</ListItem>
            <ListItem>Fashion</ListItem>
            <ListItem>Accessories</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{ marginRight: '5px' }} />Saint-Petersburg</ContactItem>
          <ContactItem href='tel:+79214813681' target='_blank'><Phone style={{ marginRight: '5px' }} />+7 999 999 99 99</ContactItem>
          <ContactItem href='mailto:inthesky133@gmail.com' target='_blank'><Mail style={{ marginRight: '5px' }} />contact@gmail.com</ContactItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer
