import React from 'react'
import img1 from '../../../assets/ocean.jpeg'
import bottle from '../../../assets/bottle.jpeg'
import image from '../../../assets/images.png'
import './Imageing.css';

function Imageing() {
  return (
    <div className='containers'>
       <div className='home-img'>
            <img src={img1} alt='alternative' />
            <img src={bottle} alt='alternative'/>
            <img src= {image} alt='alternative'/>
       </div>
    </div>
  )
}

export default Imageing