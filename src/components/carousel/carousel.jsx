import React from 'react';
import './carousel.scss';
import Carousel1 from '../../images/Carousel1.webp';
import Carousel2 from '../../images/Carousel2.webp';
import Carousel3 from '../../images/Carousel3.webp';
import Carousel4 from '../../images/Carousel4.webp';

const Carousel = () => {
  return (
    <section className='carousel-section'>
        <div className='carousel-container'>
        <div className='wrapper'>
        <div className='carousel-image' style={{ backgroundImage: `url(${Carousel1})` }}>
            <h2 className='carousel-header'>Beverly Hills</h2>
        </div>
        <div className='carousel-image' style={{ backgroundImage: `url(${Carousel2})` }}>
            <h2 className='carousel-header'>Calabasas</h2>
        </div>
        <div className='carousel-image' style={{ backgroundImage: `url(${Carousel3})` }}>
            <h2 className='carousel-header'>Malibu</h2>
        </div>
        <div className='carousel-image' style={{ backgroundImage: `url(${Carousel4})` }}>
            <h2 className='carousel-header'>Brentwood</h2>
        </div>
      </div>
        </div>
    </section>
  );
}

export default Carousel;
