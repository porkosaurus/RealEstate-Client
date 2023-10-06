import React from 'react'
import './contact-home.scss'
import ContactImage from '../../images/BackgroundContact.webp'

const ContactHome = () => {
  const sectionStyle = {
    backgroundImage: `
      linear-gradient(rgba(16, 29, 44, 0.95), rgba(16, 29, 44, 0.95)), 
      url(${ContactImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className='contact-home-section'>
        <div className='contact-home-main' style={sectionStyle}>
            <h3 className='contact-home-heading'>Your Own Home:</h3>
            <h2 className='contact-home-main-heading'>The ultimate personal freedom</h2>
            <a href="/contact" >
                <button className='search-button contact-button'>Contact Us</button>
            </a>       
            <div className='seen-on-container'>
            <div className='white-banner'></div>     
            <div className='seen-on-header'><h2>Seen on</h2></div>
            <div className='white-banner'></div>
            </div>
            <div className='companies-container'>
              <img className='companies-image' src="https://nexter.netlify.app/img/logo-bbc.png" alt="" />
              <img className='companies-image' src="https://nexter.netlify.app/img/logo-forbes.png" alt="" />
              <img className='companies-image' src="https://nexter.netlify.app/img/logo-techcrunch.png" alt="" />
              <img className='companies-image' src="https://nexter.netlify.app/img/logo-bi.png" alt="" />

            </div>
        </div>
        <div className='contact-home-realtors'>
            <h3 className='realtors-heading'>Top 3 Realtors</h3>
            <div className='realtors-container'>
            <div className='realtor-container'>
              <img className='realtor-image' src="https://nexter.netlify.app/img/realtor-1.jpeg" alt="" />
              <div className='realtor-text'>
                <h4 className='realtor-name'>Erik Feinman</h4>
                <h5 className='realtor-sold'>245 Houses Sold</h5>
              </div>
            </div>
            <div className='realtor-container'>
              <img className='realtor-image' src="https://nexter.netlify.app/img/realtor-2.jpeg" alt="" />
              <div className='realtor-text'>
                <h4 className='realtor-name'>Kim Brown</h4>
                <h5 className='realtor-sold'>212 Houses Sold</h5>
              </div>
            </div>
            <div className='realtor-container'>
              <img className='realtor-image' src="https://nexter.netlify.app/img/realtor-3.jpeg" alt="" />
              <div className='realtor-text'>
                <h4 className='realtor-name'>Toby Ramsey</h4>
                <h5 className='realtor-sold'>312 Houses Sold</h5>
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ContactHome
