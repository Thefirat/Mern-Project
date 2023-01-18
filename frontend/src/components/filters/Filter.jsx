import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
    return (
        <div className='filter-row'>
            <div className="filter-col">
                <div className="filter-group">
                    <button>All</button>
                    <button>Computer</button>
                    <button>Phone</button>
                </div>

                <div className="filter-group">
                    <input type="search" placeholder='Search...' />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>
            <div className="filter-col">
                <div className="filter-cards">
                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/macbook1.jpg" alt="" />
                            <Link to="/"><img className='card-sellers' src="./assets/images/sellers/js.png" alt=""/></Link>
                        </div>
                        <div className="card-body">
                            <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Computer</span>
                            <span className="price">12 000kr</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to Bag</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/iphone14.jpg" alt="" />
                            <Link to="/"><img className='card-sellers' src="./assets/images/sellers/sellers.png" alt=""/></Link>
                        </div>
                        <div className="card-body">
                            <Link to="">Iphone 14 <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Phone</span>
                            <span className="price">10 000kr</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to Bag</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/macbook1.jpg" alt="" />
                            <Link to="/"><img className='card-sellers' src="./assets/images/sellers/js.png" alt=""/></Link>
                        </div>
                        <div className="card-body">
                            <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Computer</span>
                            <span className="price">12 000kr</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to Bag</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/macbook1.jpg" alt="" />
                            <Link to="/"><img className='card-sellers' src="./assets/images/sellers/js.png" alt=""/></Link>
                        </div>
                        <div className="card-body">
                            <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Computer</span>
                            <span className="price">12 000kr</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to Bag</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/macbook1.jpg" alt="" />
                            <Link to="/"><img className='card-sellers' src="./assets/images/sellers/sellers.png" alt=""/></Link>
                        </div>
                        <div className="card-body">
                            <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Computer</span>
                            <span className="price">12 000kr</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to Bag</button>
                        </div>
                    </div>
                </div>
                <div className="filter-pagination">
                    <ul>
                        <li><Link to="#">Prev</Link></li>
                        <li className='pagi-active'><Link to="#">1</Link></li>
                        <li><Link to="#">Next</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter