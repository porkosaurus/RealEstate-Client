import React from 'react'
import './contact-form.scss'

const ContactForm = () => {
  return (
    <div className='contact-container contact-form'>
        <div className='contact-heading-circle'>

        </div>
        <div className='contact-heading-secondary-circle'>

        </div>
        <div className='contact-banner'>

        </div>
        <h1 className='contact-heading'>Contact Us</h1>
        <div className='contact-form-container'>
        <div className='contact-input-container'>
            <div className='contact-label-container'>
            <label className='contact-label' htmlFor="username">Name</label>

            </div>
        <input className='contact-input' type="text" />
        </div>
        <div className='contact-input-container'>
            <div className='contact-label-container'>
            <label className='contact-label' htmlFor="email">Email</label>
            </div>
        <input className='contact-input' type="email" />
        </div>
        <div className='contact-input-container'>
            <div className='contact-label-container'>
            <label className='contact-label' htmlFor="contact-number">Phone Number</label>

            </div>
        <input className='contact-input' type="text" />
        </div>
        </div>
    </div>
  )
}

export default ContactForm