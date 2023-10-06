import React from 'react'
import './main-locations.scss'
import CulverCity from '../../images/CulverCity.jpg'
import Malibu from '../../images/Malibu.webp'
import SantaMonica from '../../images/SantaMonica.webp'

const MainLocations = () => {
  return (
    <section className='main-locations-section'>
        <div className='main-locations-container'>
            <div className='main-location-container'>
                <h2 className='main-location-heading'>Culver City</h2>
                <img className='main-location-image' src={CulverCity} alt="" />
                <p className='main-location-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste non voluptates illo recusandae molestiae numquam odit aliquam ipsa quis? Cumque, voluptate! Officiis asperiores sed earum voluptates aut odio, tempora rem!</p>
            </div>
            <div className='main-location-container'>
                <h2 className='main-location-heading'>Santa Monica</h2>
                <img className='main-location-image' src={SantaMonica} alt="" />
                <p className='main-location-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste non voluptates illo recusandae molestiae numquam odit aliquam ipsa quis? Cumque, voluptate! Officiis asperiores sed earum voluptates aut odio, tempora rem!</p>
            </div>
            <div className='main-location-container'>
                <h2 className='main-location-heading'>Malibu</h2>
                <img className='main-location-image' src={Malibu} alt="" />
                <p className='main-location-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste non voluptates illo recusandae molestiae numquam odit aliquam ipsa quis? Cumque, voluptate! Officiis asperiores sed earum voluptates aut odio, tempora rem!</p>
                <button className='main-location-button'>&rarr;</button>
            </div>
        </div>
        <div className='blue-ribbon'>
    
        </div>
    </section>
  )
}

export default MainLocations