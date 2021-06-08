import React from 'react';
import ImageOne from '../images/guitar.jpg';
import ImageTwo from '../images/guitar 2.jpeg';
import ImageThree from '../images/guitar-3.jpg';
import ImageFourth from '../images/guitar-4.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Fender Stratocaster</h2>
          <p className='mb-2'>Guitar Type: Solid-Body Electric</p>
          <p className='mb-2'>Legend Who Played It: Eric Clapton</p>
          <span>$25000</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Martin D-45</h2>
          <p className='mb-2'>Guitar Type: Steel String Dreadnought Acoustic</p>
          <p className='mb-2'>Legend Who Played It: Neil Young</p>
          <span>$16000</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageThree} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Fender Telecaster</h2>
          <p className='mb-2'>Guitar Type: Solid-Body Electric</p>
          <p className='mb-2'>Legend Who Played It: Buck Owens</p>  
          <span>$16895</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageFourth} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>1969 José Ramírez 1a “AM”</h2>
          <p className='mb-2'>Guitar Type: Classical Nylon Acoustic Dreadnought</p>
          <p className='mb-2'>Legend Who Played It: Andres Segovia</p>
          <span>$18222</span>
        </div>
      </div>
    </>
  );
};

export default Content;
