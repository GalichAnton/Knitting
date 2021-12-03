import { Send } from '@material-ui/icons'
import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { Button, Container, Description, Input, InputContainer, Title, Wrapper } from './NewsletterStyle'

const Newsletter = () => {
  return (
    <Container id='contactForm'>
      <Wrapper>
      <ContactForm />
      </Wrapper>
      
    </Container>
  )
}

export default Newsletter
