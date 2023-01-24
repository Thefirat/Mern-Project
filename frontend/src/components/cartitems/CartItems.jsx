import { faEye, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const CartItems = () => {
    return (
        <div className='cart-row'>
            <h2 className="cart-title">My Bag</h2>
            <div className="cart-items">
                <div className="cart-col">
                    <div className="cart-cards">
                        <div className="filter-card">
                            <div className="card-header">
                                <img src="./assets/images/products/macbook1.jpg" alt="" />
                                <Link to="/"><img className='card-sellers' src="./assets/images/sellers/js.png" alt="" /></Link>
                            </div>
                            <div className="card-body">
                                <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                <span className='category'>Computer</span>
                                <span className="price">12 000kr</span>                               
                            </div>
                            <div className="card-action">
                            <button><FontAwesomeIcon icon={faMinusCircle} /></button>
                            <span className='quantity'>1</span>
                            <button><FontAwesomeIcon icon={faPlusCircle} /></button>
                            </div>
                            <div className="card-footer cart">
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-col">
                    <div className="cart-bill">
                        <h2 className="bill-title">My Bill</h2>

                        <div className="bill-groups">
                            <div className="bill-group">
                                <span>Macbook Pro</span>
                                <span>14 000kr</span>
                            </div>
                            <div className="bill-group">
                                <span>Macbook Pro</span>
                                <span>14 000kr</span>
                            </div>
                        </div>
                        <div className="bill-total">
                            <div className="bill-group">
                                <span>Subtotal</span>
                                <span>300Kr</span>
                            </div>

                            <div className="bill-group">
                                <span>Tax 20%:</span>
                                <span>30Kr</span>
                            </div>

                            <div className="bill-group">
                                <h3>Total:</h3>
                                <h3>330Kr</h3>
                            </div>
                        </div>
                        <div className="bill-btn">
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems