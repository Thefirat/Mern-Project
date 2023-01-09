import React from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='slider-row'>
        <div className="slider-col">
            <img src='./assets/images/others/bild1.jpg' alt='' />
        </div>
        <div className="slider-col">
            <Link to="/shop">Go to Shop</Link>
        </div>

    </div>
  )
}

export default Slider