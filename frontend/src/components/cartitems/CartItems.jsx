import { faEye, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'

const CartItems = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const {
        cart: {CartItems},
    } = state;


    const updateQuantityHandler = async (item, quantity) => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: {...item.quantity},
        })
    }

    return (

        <div className='cart-row'>
            <h2 className="cart-title">My Bag</h2>
            <div className="cart-items">
                <div className="cart-col">
                    {CartItems.length === 0 ? (<h3 className='info'>Cart is empty</h3>) : (
                        <div className="cart-cards">
                            {CartItems.map((item) => (
                                <div className="filter-card" key={item._id}>
                                    <div className="card-header">
                                        <img src={item.image} alt={item.name} />
                                        <Link to="/"><img className='card-sellers' src={item.sellerImage} alt={item.sellerName} /></Link>
                                    </div>
                                    <div className="card-body">
                                        <Link to={`../${item.slug}`}>{item.name}<FontAwesomeIcon icon={faEye} /> </Link>
                                        <span className='category'>{item.category}</span>
                                        <span className="price">{item.price}kr</span>
                                    </div>
                                    <div className="card-action">
                                        <button onClick={() => updateQuantityHandler(item, item.quantity - 1)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button onClick={() => updateQuantityHandler(item, item.quantity + 1)}><FontAwesomeIcon icon={faPlusCircle} /></button>
                                    </div>
                                    <div className="card-footer cart">
                                        <button>Delete</button>
                                    </div>
                                </div>
                            ))}


                        </div>
                    )}
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

export default CartItems;