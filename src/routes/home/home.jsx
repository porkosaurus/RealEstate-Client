import React from 'react'
import HomeHeader from '../../components/home-header/home-header'
import Areas from '../../components/areas/areas'
import MainLocations from '../../components/main-locations/main-locations'
import Carousel from '../../components/carousel/carousel'
import Contact from '../contact/contact'
import ContactHome from '../../components/contact-home/contact-home'
import Navigation from '../../components/navigation/navigation'
import './home.scss'

const Home = () => {
  return (
    <>
        <Navigation></Navigation>
        <HomeHeader></HomeHeader>
        <Areas></Areas>
        <MainLocations></MainLocations>
        <Carousel></Carousel>
        <ContactHome></ContactHome>
    </>
  )
}

export default Home