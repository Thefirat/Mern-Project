import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
    <div className='latest-row'>
        <div className="latest-col">
           <h2>New Products</h2>
           <div className="latest-products">
                <div className="latest-group">
                    <div className="latest-header">
                        <img src="./assets/images/products/macbook1.jpg" alt=""/>
                        <Link to="/"><img className='card-sellers' src="./assets/images/sellers/js.png" alt=""/></Link>
                    </div>
                    <div className="latest-body">
                        <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='category'>Computer</span>
                        <span className="price">12 000kr</span>
                    </div>
                </div>

                <div className="latest-group">
                    <div className="latest-header">
                        <img src="./assets/images/products/iphone14.jpg" alt=""/>
                        <Link to="/"><img className='card-sellers' src="./assets/images/sellers/sellers.png" alt=""/></Link>
                    </div>
                    <div className="latest-body">
                        <Link to="">Iphone 14 <FontAwesomeIcon icon={faEye} /></Link>
                        <span className='category'>Phone</span>
                        <span className="price">10 000kr</span>
                    </div>
                </div>
           </div>
        </div>
        <div className="latest-col">
            <h2>We provide supports to newly registered sellers</h2>
            <div className="latest-sellers">
            <div className="sellers-group">
                    <div className="sellers-header">
                        <img src="./assets/images/sellers/js.png" alt=""/>
                    </div>
                    <div className="sellers-body">
                        <Link to="">Firat Akkoyun <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='follow'>Follow</span>
                        <span className="date">Member Since: 10.01.2023</span>
                    </div>
                </div>
                <div className="sellers-group">
                    <div className="sellers-header">
                        <img src="./assets/images/sellers/sellers.png" alt=""/>
                    </div>
                    <div className="sellers-body">
                        <Link to="">User Admin <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='follow'>Follow</span>
                        <span className="date">Member Since: 10.01.2023</span>
                    </div>
                </div>
                <div className="sellers-group">
                    <div className="sellers-header">
                        <img src="./assets/images/sellers/sellers.png" alt=""/>
                    </div>
                    <div className="sellers-body">
                        <Link to="">User Admin <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='follow'>Follow</span>
                        <span className="date">Member Since: 10.01.2023</span>
                    </div>
                </div>
                <div className="sellers-group">
                    <div className="sellers-header">
                        <img src="./assets/images/sellers/sellers.png" alt=""/>
                    </div>
                    <div className="sellers-body">
                        <Link to="">User Admin <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='follow'>Follow</span>
                        <span className="date">Member Since: 10.01.2023</span>
                    </div>
                </div>
                <div className="sellers-group">
                    <div className="sellers-header">
                        <img src="./assets/images/sellers/sellers.png" alt=""/>
                    </div>
                    <div className="sellers-body">
                        <Link to="">User Admin <FontAwesomeIcon icon={faEye} /> </Link>
                        <span className='follow'>Follow</span>
                        <span className="date">Member Since: 10.01.2023</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Latest