import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { Container,  Wrapper } from './NewsletterStyle'

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
