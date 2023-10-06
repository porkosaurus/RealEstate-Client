import React from 'react'
import './contact-image.scss'
import ContactImages from '../../images/ContactImage.webp'

const ContactImage = () => {

    const contactStyle = {
        backgroundImage: `url(${ContactImages})`,
      };
  return (
    <div className='contact-container contact-image' style= {contactStyle}>

    </div>
  )
}

export default ContactImage