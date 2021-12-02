import { Send } from '@material-ui/icons'
import React from 'react'
import { Button, Container, Description, Input, InputContainer, Title } from './NewsletterStyle'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, officia accusamus</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
