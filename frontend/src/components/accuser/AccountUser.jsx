import { faEye, faPencil, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const AccountUser = () => {
    return (
        <div className='account-row'>
            <h2 className="account-title">My Account</h2>
            <div className="account-groups">
                <div className="account-group">
                    <img src="assets/images/sellers/js.png" alt="" />
                    <button className='account-image'>Change Image</button>
                    <div className="form-row account">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input required type="text" id='name' value="Name and Eftername" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input required type="email" id='email' value="text@text.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input required type="text" id='address' value="115 57 Stockholm, Sweden" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input required type="text" id='phone' value="+46/000000000" />
                            </div>
                            <div className="form-btn">
                                <button><FontAwesomeIcon icon={faRefresh} /> Update</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="account-group">
                    <h2 className="account-subtitle">My Products</h2>
                    <div className="account-products">
                        <div className="filter-cards">
                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/iphone14.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Iphone 14 <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Phone</span>
                                    <span className="price">10 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
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
                    <h2 className="account-subtitle">My Orders</h2>
                    <div className="account-orders">
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
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

export default AccountUser