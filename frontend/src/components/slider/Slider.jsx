import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='slider-row'>
        <div className="slider-col">
            <img src='./assets/images/others/bild1.jpg' alt='' />
        </div>
        <div className="slider-col">
          <h2>Online Market with the largest number of products and sellers.</h2>
            <Link to="/shop"><FontAwesomeIcon icon={faEye} /> Shop</Link>
        </div>

    </div>
  )
}

export default Slider