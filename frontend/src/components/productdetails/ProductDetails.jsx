import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    return (
        <div className='product-row'>
            <div className="product-col">
                <img src="./assets/images/products/iphone14.jpg" alt="" />
                <Link to="/"> <img className='seller-product' src="./assets/images/sellers/js.png" alt="" /></Link>
            </div>
            <div className="product-col">
                <div className="product-info">
                    <h2 className="product-title">Iphone 14</h2>
                    <span className="category">Phone</span>
                </div>
                <div className="product-info">
                    <span className="price">Price: 10 000kr</span>
                    <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe excepturi eligendi esse repellat, nemo dolores sed reiciendis facilis officia mollitia officiis, deserunt consectetur minima ea necessitatibus perspiciatis aliquam! Sint, rerum?
                        Odit rem sunt quas ducimus illum adipisci doloremque quia harum illo beatae unde suscipit provident nulla temporibus officiis recusandae iusto, sint soluta blanditiis laudantium laboriosam. Nesciunt minus distinctio veniam. Consequuntur.</span>
                </div>
                <div className="product-add">
                    <button>Add to Bag</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails