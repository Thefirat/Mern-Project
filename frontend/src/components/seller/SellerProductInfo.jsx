import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'

const SellerProductInfo = ({product}) => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;

    const addToCart = () => {

        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1; //if exists in cart than quantity + 1. If not than 1.

        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity },
        })
    }

    return (
        <div className="filter-card">
            <div className="card-header">
                <img src="../assets/images/products/macbook1.jpg" alt={product.name} />
            </div>
            <div className="card-body">
                <Link to={`../${product.slug}`}>{product.name}<FontAwesomeIcon icon={faEye} /> </Link>
                <span className='category'>{product.category}</span>
                <span className="price">{product.price}kr</span>
            </div>
            <div className="card-footer">
                <button onClick={addToCart}>Add to Bag</button>
            </div>
        </div>
    )
}

export default SellerProductInfo