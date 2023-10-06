import React from 'react'
import ContactImage from '../../components/contact-image/contact-image'
import ContactForm from '../../components/contact-form/contact-form'
import './contact.scss'

const Contact = () => {
  return (
  <main className='contact-page-container'>
    <ContactImage></ContactImage>
    <ContactForm></ContactForm>
  </main>
  )
}

export default Contact