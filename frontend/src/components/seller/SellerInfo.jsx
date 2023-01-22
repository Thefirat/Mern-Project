import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const SellerInfo = () => {
    return (
        <div className='seller-row'>
            <div className="seller-col">
                <div className="seller-info">
                    <div className="seller-header">
                        <img src="../assets/images/sellers/js.png" alt="" />
                    </div>
                    <div className="seller-body">
                        <span>Firat Akkoyun</span>
                        <span>1234 Studentbacken, Sverige</span>
                        <span>firat@gmail.com</span>
                        <span>7604213123</span>

                    </div>
                    <div className="seller-footer">
                            <span className='follow'>Follow</span>
                    </div>
                </div>

            </div>
            <div className="seller-col">
                <h2 className='seller-title'>All products of the Seller Firat Akkoyun </h2>
                <div className="seller-products">
                    <div className="filter-cards">
                        <div className="filter-card">
                            <div className="card-header">
                                <img src="../assets/images/products/macbook1.jpg" alt="" />
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
                                <img src="../assets/images/products/iphone14.jpg" alt="" />
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
                                <img src="../assets/images/products/macbook1.jpg" alt="" />
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
                                <img src="../assets/images/products/macbook1.jpg" alt="" />
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
                                <img src="../assets/images/products/macbook1.jpg" alt="" />
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

        </div>
    )
}

export default SellerInfo