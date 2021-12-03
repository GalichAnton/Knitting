import React, {  useRef, useState } from 'react'
import { Form, Input, Label, StyledButton, Textarea } from './ContactFormStyles'
import emailjs from 'emailjs-com';


export default function ContactForm(props) {
  const formRef = useRef()
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_c7wju9q', 'template_f9wrlje', formRef.current, 'user_xRGCle2i7vLF781Aruakg')
      .then((result) => {
        setDone(true)
        setTimeout(()=>{
          props.onClick()
          setDone(false)
        }, 2000)
      }, (error) => {
        console.log(error.text);
      });
      formRef.current.reset()
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Label>Ваше имя</Label>
      <Input type="text" name="user_name" placeholder='Name' required></Input>
      <Label>Ваш Email</Label>
      <Input type="email" name="user_email" placeholder='Email' required></Input>
      <Label>Телефон</Label>
      <Input type="text" name="phone" placeholder='Phone'></Input>
      <Label>Сообщение</Label>
      <Textarea name="message" placeholder='Message' rows="5"></Textarea>
      <StyledButton type='submit'>Отправить</StyledButton>
      {done ? 'Thank you' : null}
    </Form>
  )
}
